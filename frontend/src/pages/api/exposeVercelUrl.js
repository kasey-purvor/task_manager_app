export default function handler(req, res) {
    res.status(200).send(process.env.VERCEL_URL)
}