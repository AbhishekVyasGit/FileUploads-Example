const path = require("path");
const express = require("express");
const User = require("../models/user-model");
const uploads = require("../middleWares/uploads");
const router = express.Router();

router.get("/users", async (req, res) => {
    try {

        const users = await User.find();

        return res.status(200).send(users);

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});



router.get("/", async (req, res) => {
    try {

        return res.render("test");

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});


// if you want to upload one file then use ".single(fieldName)" and for uploaded many files use ".array(fieldName[,maxCount])" 
router.post("/upload", uploads.single("profilePic"), async (req, res) => {
    try {

        const user = await User.create({
            firstName: req.body.firstName,
            profilePic: req.file.path,
        });

        // console.log(req.body);
        // console.log(req.file);

        return res.redirect("/");

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});


// for uploaded many files use ".array(fieldName[,maxCount])" 
// or ".any(fieldName)"  it is used for multiple uploads,
// Accepts all files that comes over the wire. An array of files will be stored in req.files. for multiple files we map the file path because it is work for single file
router.post("/upload/multiple", uploads.any("profilePic"), async (req, res) => {
    try {

        const filePaths = req.files.map((file) => {
            console.log({file});
            return file.path;
        });
 //here we explicitly saying these properties are valid for uploads
        const user = await User.create({
            firstName: req.body.firstName,
            profilePic: filePaths,
        });

        return res.redirect("/");

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});


// OR  if we don't want to write code for single and multiple file uploads so we  can use middleware and it working for both ,only change method name




module.exports = router;