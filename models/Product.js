
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
title: String,
price: String,
description: String,
category: String,
image: String,

},{timestamps: true});

const Products = mongoose.model("Products", ProductSchema);
module.exports = {Products};
//you need to modify the shema to account for differences 
//in how each product api creates JSON objects 
//for each individual item