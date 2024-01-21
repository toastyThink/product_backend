const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
user_id: String, 
products:[{
    type: Schema.Types.ObjectId,
    ref: "Products"
}]

},{timestamps: true});

module.exports = mongoose.model("Favorites", FavoritesSchema);