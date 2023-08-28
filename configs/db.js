require('dotenv').config();

const mongoose = require("mongoose");

module.exports = mongoose.connect(process.env.URI_FILE_DB).then(() => {
    console.log("your connection is successful.");
}).catch((err) => {
    console.log("no connection", err);
});