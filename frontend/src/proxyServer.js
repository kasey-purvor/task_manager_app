import httpProxy from "http-proxy";

export const proxy = httpProxy.createProxyServer({
    target: "http://localhost:3000",
    autoRewrite: false
})