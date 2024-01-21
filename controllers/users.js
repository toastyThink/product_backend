const express = require('express');
const {Users} = require('../models/user');

async function index(req,res,next) {
	try {
    console.log(req.user)
    res.json(await Users.find({}));
  } catch (error) {

    res.status(400).json(error);
  }
};


async function create(req,res,next) {
  try {
    
    res.json(await Users.create(req.body));
  } catch (error) {

    res.status(400).json(error);
  }
};



async function show(req,res,next) {
    try {
        res.json(await Users.findById(req.params.id));
      } catch (error) {

        res.status(400).json(error);
      }
};

async function destroy(req,res,next) {
    try {
      res.json(await Users.findByIdAndDelete(req.params.id));
    } catch (error) {
   
      res.status(400).json(error);
    }
  };
  
async function update(req,res,next) {
    try {
      res.json(
        await Users.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {

      res.status(400).json(error);
    }
  };

module.exports = {
	index,
	create,
	show,
	delete: destroy,
	update
}