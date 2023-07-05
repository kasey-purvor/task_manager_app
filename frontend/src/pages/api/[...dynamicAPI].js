import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import Cookies from "cookies";
import proxy from "../../proxy/proxy.js";


export default async function handler(req, res) {
    console.log(" Dynamic API call");
    const cookies = new Cookies(req, res);
    const token = cookies.get("auth-token");
    token ? console.log("cookie recieved from client") : console.log("cookie not recieved")
    req.headers["auth-token"] = token;
    req.headers.cookies = ""
    const response = await proxy(req, res, (err) => {
        if (err) {
            console.log("error called in the proxy call itself");
            throw err;
        }
        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
    return 
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    },
};
