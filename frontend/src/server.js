const express = require("express");
const https = require("https");
const fs = require("fs");
const next = require("next");
const { parse } = require("url");
const app = next({ dev: true });
const handle = app.getRequestHandler();
console.log('this is the frontened root',process.cwd())
const options = {
    key: fs.readFileSync("./certs/localhost-key.pem"),
    cert: fs.readFileSync("./certs/localhost.pem"),
};
app.prepare().then(() => {
    // const server = express();

    https.createServer(options, async (req, res) => {
            const parsedURL = parse(req.url, true);
            await handle(req, res, parsedURL);
        }).listen(process.env.FRONTEND_PORT, (err) => {
            if (err) throw err;
            console.log(`Frontend server is running on port ${process.env.FRONTEND_PORT}`);
        });
});
