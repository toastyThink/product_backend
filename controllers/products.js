
const express = require('express');

const {Products} = require('../models/Product');
const {Favorites} = require('../models/favorites');

// products index function
async function index(req,res,next) {
	try {
    // get all products
    // console.log("this is index: ",res.json());
    res.json(await Products.find({}));
  } catch (error) {

    res.status(400).json(error);
  }
};

// async function getFavorites(req, res){
//   try{
//     // get all favorites
//     // console.log("this is getfavorites: ",res.json());
//     res.json(await Favorites.find("favorites", {}));
   
//     // res.json( mongoose.connection.db.collection('favorites').find({}));
//   }catch(error){
//     res.status(400).json(error);
//   }
// };

//create favorite
// async function create(req,res,next) {
//   console.log(req.body);
//   try {
//     // create new favorite
//     res.json(await Favorites.create(req.body));
//   } catch (error) {

//     res.status(400).json(error);
//   }
// };

async function handleAddToFavorites(req, res, next){
  const bodyData = req.body;

  const foundFavorite = await Favorites.findOne({user_id: bodyData.current_user });
  
    if(!foundFavorite){;
        const favoriteData = {user_id : bodyData.current_user};
        const newFav = await Favorites.create(favoriteData);

        newFav.products.push(bodyData.product._id);
        newFav.save();
    
   }else{
      foundFavorite.products.push(bodyData.product._id);
      foundFavorite.save();
   }
};
  

// show a product -> details page
async function show(req,res,next) {
    try {
        // send one product back with matching id
        res.json(await Products.findById(req.params.id));
      } catch (error) {

        res.status(400).json(error);
      }
    };

// delete/destroy product
async function destroy(req,res,next) {
    try {
      // delete the indivudal product using its id from params
      res.json(await Products.findByIdAndDelete(req.params.id));
    } catch (error) {
   
      res.status(400).json(error);
    }
  };
  
// update/put function
async function update(req,res,next) {
    try {
      //update product using its Id, provide date of form and updated materials 
      //as a response
      res.json(
        await Products.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {

      res.status(400).json(error);
    }
  };

module.exports = {
	index,
	create: handleAddToFavorites,
  // getFavorites,
	show,
	delete: destroy,
	update
}