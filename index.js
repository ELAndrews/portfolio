require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helment = require("helmet");
const routers = require("./routers")

const port =
    process.env.PORT ||
    5000; /* needs to be agreeeable for both my computer, and HEROKU */

const app = express();

app.use(express.static("./portfolio-app/build"));

app.use(helment());
app.use(cors());
app.use(express.json());

app.use(routers)

app.use((req, res) => {
    res.json(`Emmas portfolio ... nothing to see here...`);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});