import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import Cookies from "cookies";
import proxy from "../../proxy/proxy.js";

export default async function handler(req, res) {
    console.log("API call");
    const cookies = new Cookies(req, res);
    const token = cookies.get("auth-token");
    token ? console.log("Finally it bloody worked", token) : console.log("cookie not recieved");
    req.headers["auth-token"] = token;
    req.headers.cookies = "";
    try {
        const response = await proxy(req, res);
        console.log("API route data response, returned from proxy", response);
    } catch (e) {
        console.log("API route. Proxy threw error", e);
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};
