const express = require('express');

//Import Batik Controller
const BatikController = require('../Controller/batikController.js');


const route = express.Router();

//GET ALL Batik
route.get('/', BatikController.getAllBatik);

//GET SELECTED ARTICLE
route.get('/:id', BatikController.getSelectedBatik);


module.exports = route;
