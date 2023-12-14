const express = require('express');

//Import Batik Controller
const BatikController = require('../Controller/batikController.js');


const route = express.Router();

//GET ALL Batik
route.get('/', BatikController.getAllBatik);

module.exports = route;
