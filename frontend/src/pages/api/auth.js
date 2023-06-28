import httpProxy from "http-proxy";
import Cookies from "cookies";
import url from "url";

// Get the actual API_URL as an environment variable. For real
// applications, you might want to get it from 'next/config' instead.
const API_URL = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

// You can export a config variable from any API route in Next.js.
// We'll use this to disable the bodyParser, otherwise Next.js
// would read and parse the entire request body before we
// can forward the request to the API. By skipping the bodyParser,
// we can just stream all requests through to the actual API.
export const config = {
    api: {
        bodyParser: false,
    },
};
const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        const pathname = url.parse(req.url).pathname;

        const isSignupOrLogin = pathname === "/api/signup" || pathname === "/api/signin";

        const cookies = new Cookies(req, res);
        const jsonWebToken = cookies.get("auth-token");

        req.headers.cookie = "";

        if (jsonWebToken) {
            req.header["auth-token"] = jsonWebToken;
        }

        // if (isSignupOrLogin) {
        //     proxy.on("proxyRes", loginSignupInterceptor);
        // }

        proxy.on("proxyReq", function (proxyReq, req, res) {
            if (req.body) {
                let bodyData = req.body
                console.log(JSON.stringify(bodyData));
                // In case if content-type is application/x-www-form-urlencoded -> we need to change to application/json
                // proxyReq.setHeader("Content-Type", "application/json");
                // proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
                // Stream the content
                proxyReq.write(bodyData);
            }
        });

        proxy.on("proxyRes", function (proxyRes, req, res) {
            // console.log(proxyRes)
            let apiResponseBody = "";
            proxyRes.on("data", (chunk) => {
                apiResponseBody += chunk;
            });
            // console.log(apiResponseBody);
        });
        proxy.once('error', reject)
        proxy.web(
            req,
            res,
            {
                target: "http://localhost:3000/users",
                autoRewrite: false,
                // buffer:httpProxy.buffer(req),
                // selfHandleResponse: false,
            },
            () => {
                console.log(req);
            }
        );
        function loginSignupInterceptor(proxyRes, req, res) {
            let apiResponseBody = "";
            proxyRes.on("data", (chunk) => {
                apiResponseBody += chunk;
            });
            console.log("inerceptor called, reponse data=", apiResponseBody);

            proxyRes.on("end", () => {
                try {
                    // Extract the authToken from API's response:
                    const { token } = apiResponseBody;
                    const authToken = token.token;
                    // // Set the authToken as an HTTP-only cookie.
                    // // We'll also set the SameSite attribute to
                    // // 'lax' for some additional CSRF protection.
                    const cookies = new Cookies(req, res);
                    cookies.set("auth-token", authToken, {
                        httpOnly: true,
                        sameSite: "lax",
                    });

                    // Our response to the client won't contain
                    // the actual authToken. This way the auth token
                    // never gets exposed to the client.
                    res.status(200).json({ loggedIn: true });
                    resolve();
                } catch (err) {
                    console.log(err);
                }
            });
        }
    });
}
