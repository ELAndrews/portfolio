require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helment = require("helmet");
const routers = require("./routers")

const port =
    process.env.PORT ||
    5000;

const app = express();

app.use(helment());
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', req.headers.origin)
    next()
})

app.use(routers)

app.get("/", (req, res) => {
    res.json(`Emmas portfolio ... nothing to see here...`);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});