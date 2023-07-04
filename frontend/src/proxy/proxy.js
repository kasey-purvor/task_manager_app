import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import Cookies from "cookies";
import zlib, { gzip } from "zlib";

if (process.env.NEXT_PUBLIC_DEV === "true") {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV;
} else {
    var token = process.env.NEXT_PUBLIC_TOKEN_PROD;
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

const proxyResHAndler = (proxyRes, req, res) => {
    console.log("Proxy Server hardcoded Token: ", token);
    const pathName = req.url;
    var userCookieEdit = false;
    if (pathName === "/api/users" || pathName === "/api/users/login") {
        userCookieEdit = true;
    }
    var data = [];
    proxyRes.on("data", (chunk) => {
        // console.log("concating data");
        data.push(chunk);
        console.log("data response", data);
    });
    proxyRes.on("end", () => {
        console.log("end of data event hit ");
        let decompressedData = "";
        const gzipCheck = Buffer.concat(data).toString("hex").slice(0, 4);
        console.log("gzipped data check", gzipCheck);
        gzipCheck === "1f8b" ? (decompressedData = zlib.gunzipSync(Buffer.concat(data))) : (decompressedData = data);

        // console.log("decompressed Data in JSON form utf8", decompressedData.toString("utf8"))
        const dataJSON = JSON.parse(decompressedData.toString("utf8"));
        // console.log("Data has been turned into JSON ", dataJSON);
        dataJSON ? console.log(" data was returned from backend API") : null;

        if (userCookieEdit) {
            const cookies = new Cookies(req, res);
            console.log("setting cookie to client. Token = ", dataJSON.token);
            cookies.set("auth-token", dataJSON.token, {
                httpOnly: true,
                sameSite: "lax",
                // domain: "localhost",
                path: "/",
            });
            console.log("cookie set to client");
        }
        console.log("Proxy Sever Response", dataJSON);
        res.send(dataJSON);
        return dataJSON;
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
    timeout: 10000,
    proxyTimeout: 10000,
    logger: console,
    autoRewrite: false,
    changeOrigin: true,
    selfHandleResponse: true,
    headers: {
        "auth-token": token,
    },
    pathRewrite: pathRewrite,
    onProxyRes: proxyResHAndler,
    on: {
        error: (err, req, res) => {
            console.log("error", err);
            console.log("req headers", req.headers);
            console.log("res headers", res.headers);
        },
    },
});
export default proxy;
