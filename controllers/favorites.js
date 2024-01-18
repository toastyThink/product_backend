const express = require('express');

const {Favorites} = require('../models');

// favorites index function
async function index(req,res,next) {
  console.log('getting favorites');
	try {
    // get all products
    res.json(await Favorites.find({}));
  } catch (error) {

    res.status(400).json(error);
  }
};


// show a product -> details page
async function show(req,res,next) {
    try {
        // send one product back with matching id
        res.json(await Favorites.findById(req.params.id));
      } catch (error) {

        res.status(400).json(error);
      }
};

// delete/destroy favorite
async function destroy(req,res,next) {
    try {
      res.json(await Favorites.findByIdAndDelete(req.params.id));
    } catch (error) {
   
      res.status(400).json(error);
    }
  };
  

async function update(req,res,next) {
    try {
      res.json(
        await Favorites.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {

      res.status(400).json(error);
    }
  };

module.exports = {
	index,
	show,
	delete: destroy,
	update
}