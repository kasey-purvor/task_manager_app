const http = require('http');
const fs = require('fs');
const next = require('next');
const { parse } = require('url');
const proxy = require('./proxy/proxy.js')
const app = next({ dev: true });
const handle = app.getRequestHandler();
console.log('This is the frontend root',process.cwd())


// this code was going to be used to make the frontened server run on https. I n olonger need this. 

// app.prepare().then(() => {
//     // const server = express();
//     if(process.env.DEV === 'true') {
//         var options = {
//             key: fs.readFileSync('./certs/localhost-key.pem'),
//             cert: fs.readFileSync('./certs/localhost.pem'),
//         };
//     } else {
//         var options = {}
//     }
//     https.createServer(options, async (req, res) => {
//             const parsedURL = parse(req.url, true);
//             await handle(req, res, parsedURL);
//         }).listen(process.env.FRONTEND_PORT, (err) => {
//             if (err) throw err;
//             console.log(`Frontend server is running on port ${process.env.FRONTEND_PORT}`);
//         });
// });
