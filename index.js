const express = require("express");
const path = require("path");
const app = express();
const connect = require("./configs/db");
const userController = require("./controllers/user-controller");
const cors = require("cors");
app.use(cors("*"));
app.use(express.json());
require('dotenv').config();

app.set("view engine", "ejs");
app.set("views", path.resolve("./file-uploads/views"));

app.use(express.urlencoded({extended: false}));

app.use("/", userController);




app.listen(5000, async () => {
    try {
        console.log("hello ji ,listening to port 5000 , please waiting for connection... ");
    } catch (err) {
        console.error("connection failed", err.message);
    }
});