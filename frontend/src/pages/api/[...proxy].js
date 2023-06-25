import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import Cookies from "cookies";

export const config = {
    api: {
        bodyParser: false,
    },
};

if (process.env.NEXT_PUBLIC_DEV === 'true') {
    var token = process.env.NEXT_PUBLIC_TOKEN_DEV
} else {
    var token = NEXT_PUBLIC_TOKEN_PROD
}
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS

const pathRewrite = (path, req) => {
    if (req.url === "/api/signin") {
        return path.replace("/api/signin", "/api/users/login");
    } else if (req.url === "/api/signup") {
        return path.replace("/api/signup", "/api/users");
    } else if (req.url === "/api/allTasks") {
        console.log("path rewrite", path)
        return path.replace("/api/allTasks", "/api/tasks");
    }
};
const proxyResHAndler = (proxyRes, req, res) => {
    const pathName = req.url;
    var userCookieEdit = false
    if(pathName === "/api/users" || pathName === "/api/users/login") {
        userCookieEdit = true
    } 
    var data = [];
    proxyRes.on("data", (chunk) => {
        console.log("concating cata")
        data.push(chunk);
        console.log("data response", data)
    });
    
    proxyRes.on("end", async () => {
        try {
            const dataJSON = JSON.parse(Buffer.concat(data).toString("utf-8"));
            // console.log(" returned from API", dataJSON);
            const cookies = new Cookies(req, res);
            if (userCookieEdit) {
                console.log("setting cookie to client")
                cookies.set("auth-token", dataJSON.token, {
                    httpOnly: false,
                    sameSite: "lax",
                    // domain: "http://localhost",
                    path: "/"
                });
            }
        // const tasks = JSON.parse(data.toString())
            res.send(dataJSON);
            return ;
        } catch (e) {
            res.send(e);
        }
    });
};



export default async function handler(req, res) {
    // const pathName = req.url;
    // const oldPath = "^" + pathName;
    // if (pathName === "/api/signin") {
    //     const newPath = "/api/users/login";
    // } else if (pathName === "/api/signup") {
    //     const newPath = "/api/users";
    // }
    const cookies = new Cookies(req, res);
    var jwt = await cookies.get("auth-token");
    console.log("have i got the http-cookies from the req?", jwt);
    const proxy = createProxyMiddleware({   
        target: backendApiUrl,
        autoRewrite: false,
        changeOrigin: true,
        selfHandleResponse: true,
        headers: {
            "auth-token": token
        },
        pathRewrite: pathRewrite,
        onProxyRes: proxyResHAndler,
    });
    console.log("proxy call");
    // req.setHeader("auth-token", jwt);
    proxy(req, res, (err) => {
        if (err) {
            console.log("error called in the proxy call itself");
            throw err;
        }
        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
}
