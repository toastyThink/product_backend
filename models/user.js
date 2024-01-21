
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
userName: String,
password: String,
email: String,
bio: String,
image: String,
favorites: []

},{timestamps: true});
    
const User = mongoose.model("User", userSchema);
module.exports = {User};