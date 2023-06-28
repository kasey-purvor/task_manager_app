import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import Cookies from "cookies";

if (process.env.NEXT_PUBLIC_DEV === "true") {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV;
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD;
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

const proxyResHAndler = (proxyRes, req, res) => {
    const pathName = req.url;
    var userCookieEdit = false;
    if (pathName === "/api/users" || pathName === "/api/users/login") {
        userCookieEdit = true;
    }
    var data = [];
    proxyRes.on("data", (chunk) => {
        console.log("concating data");
        data.push(chunk);
        console.log("data response", data);
    });
    proxyRes.on("end", async () => {
        try {
            const dataJSON = JSON.parse(Buffer.concat(data).toString("utf-8"));
            dataJSON ? console.log(" data returned from API") : null;
            const cookies = new Cookies(req, res);
            if (userCookieEdit) {
                console.log("setting cookie to client");
                cookies.set("auth-token", dataJSON.token, {
                    httpOnly: true,
                    sameSite: "lax",
                    // domain: "localhost",
                    path: "/",
                });
            }
            res.send(dataJSON);
            console.log("Proxy Sever Response", dataJSON)
            return dataJSON;
        } catch (e) {
            res.send(e);
        }
    });
};
const pathRewrite = (path, req) => {
    if (req.url === "/api/signin") {
        return path.replace("/api/signin", "/api/users/login");
    } else if (req.url === "/api/signup") {
        return path.replace("/api/signup", "/api/users");
    } else {
        return false;
    }
};
const proxy = createProxyMiddleware({
    target: backendApiUrl,
    autoRewrite: false,
    changeOrigin: true,
    selfHandleResponse: true,
    headers: {
        "auth-token": token,
    },
    pathRewrite: pathRewrite,
    onProxyRes: proxyResHAndler,
});
export default proxy;