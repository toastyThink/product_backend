
const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');


router.get("/", usersCtrl.index);

// create/post route
router.post("/", usersCtrl.create);

// show/details page route
router.get("/:id", usersCtrl.show);

//delete/destroy route
router.delete("/:id", usersCtrl.delete);

//update/put route
router.put("/:id", usersCtrl.update);

module.exports = router