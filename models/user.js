
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
    
module.exports = mongoose.model("User", userSchema);
    