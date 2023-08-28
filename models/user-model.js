const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        // lastName: { type: String, required: false },
        // email: { type: String, required: true },
        // password: { type: String, required: true },
        // age: { type: Number, required: true },
        profilePic: [{ type: String, required: false }],  //url in []
    },
    {
        versionKey: false,
        timestamps: true,
    }
)


const User = mongoose.model("users",userSchema);
module.exports = User;