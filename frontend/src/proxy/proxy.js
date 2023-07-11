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
    const pathName = req.url;
    const cookies = new Cookies(req, res);
    var userCookieEdit = false;

    if (pathName === "/api/users" || pathName === "/api/users/login") {
        userCookieEdit = true;
    } else if (pathName === "/api/users/logout") {
        try {
            cookies.set("auth-token", "", {
                expires: Date.now(),
                httpOnly: true,
                sameSite: "lax",
                path: "/",
            });
            console.log("proxy has deleted cookies ");
        } catch (e) {
            console.log(e);
        }
    }

    var data = [];
    proxyRes.on("data", (chunk) => {
        // console.log("concating data");
        data.push(chunk);
    });
    proxyRes.on("end", () => {
        // console.log("end of data event hit ");
        let decompressedData = "";
        const concattedData = Buffer.concat(data);
        // console.log("hex String data", concattedData.toString("hex"))
        const gzipCheck = concattedData.toString("hex").slice(0, 4);
        console.log("gzipped data check? 1f8b?: ", gzipCheck);
        gzipCheck === "1f8b" ? (decompressedData = zlib.gunzipSync(concattedData)) : (decompressedData = data);

        // console.log("decompressed Data in JSON form utf8", decompressedData.toString("utf8"))
        const dataJSON = JSON.parse(decompressedData.toString("utf8"));
        // console.log("Data has been turned into JSON ", dataJSON);
        dataJSON ? console.log("proxy server:  data was returned from backend API") : null;

        if (userCookieEdit) {
            console.log("setting cookie to client. Token = ", dataJSON.token);
            console.log("proxy Server: data returned from user route: ", dataJSON);
            cookies.set("auth-token", dataJSON.token.token, {
                httpOnly: true,
                sameSite: "lax",
                // domain: "localhost",
                path: "/",
            });
            res.send(dataJSON.user);
            return;
        } else {
            res.send(dataJSON);
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
    timeout: 10000,
    proxyTimeout: 10000,
    logger: console,
    autoRewrite: false,
    changeOrigin: true,
    selfHandleResponse: true,
    // headers: {
    //     "auth-token": token,
    // },
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
