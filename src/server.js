const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
    quiet: true,
    path: path.resolve(__dirname, "..", ".env")
});

const express = require("express");

const PORT = process.env.PORT;
const publicPath =  path.join(__dirname, "..", "public");
const assetsPath =  path.join(publicPath, "assets");
const pagesPath =  path.join(publicPath, "pages");

const app = express();

app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`)
})

app.use("/", express.static(pagesPath));
app.use("/assets", express.static(assetsPath));