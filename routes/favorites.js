
const express = require('express');
const router = express.Router();

const favoritesCtrl = require('../controllers/favorites');

//get route
router.get("/", favoritesCtrl.index);

//create/post route
//router.post("/", favoritesCtrl.create);

// show/details page route
router.get("/:id", favoritesCtrl.show);

//delete/destroy route
router.delete("/:id", favoritesCtrl.delete);

//update/put route
router.put("/:id", favoritesCtrl.update);

module.exports = router

