const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})