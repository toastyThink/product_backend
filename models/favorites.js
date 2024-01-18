const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
title: String,
price: String,
description: String,
category: String,
image: String,

},{timestamps: true});

module.exports = mongoose.model("Favorites", FavoritesSchema);