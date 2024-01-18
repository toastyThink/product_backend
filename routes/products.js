
const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/products');

//get route
router.get("/", productsCtrl.index);

//getFavs route
//router.get("/favorites", productsCtrl.getFavorites);

// create/post route
router.post("/", productsCtrl.create);

// show/details page route
router.get("/:id", productsCtrl.show);

//delete/destroy route
router.delete("/:id", productsCtrl.delete);

//update/put route
router.put("/:id", productsCtrl.update);

module.exports = router

