const https = require('https');
const fs = require('fs');
const next = require('next');
const { parse } = require('url');

const app = next({ dev: true });
const handle = app.getRequestHandler();
console.log('This is the frontend root',process.cwd())

    


app.prepare().then(() => {
    // const server = express();
    if(process.env.NEXT_PUBLIC_DEV === 'true') {
        var options = {
            key: fs.readFileSync('./certs/localhost-key.pem'),
            cert: fs.readFileSync('./certs/localhost.pem'),
        };
    } else {
        var options = {}
    }
    https.createServer(options, async (req, res) => {
            const parsedURL = parse(req.url, true);
            await handle(req, res, parsedURL);
        }).listen(process.env.FRONTEND_PORT, (err) => {
            if (err) throw err;
            console.log(`Frontend server is running on port ${process.env.FRONTEND_PORT}`);
        });
});
