const express = require('express');

//Import Article Controller
const OrderController = require('../Controller/orderController.js');

const route = express.Router();

//GET ALL ORDER
route.get('/:userid', OrderController.getAllOrder);

//ADD ORDER
route.post('/checkout', OrderController.checkout);

// LIKE / UNLIKE ARTICLE
// route.post('/like', ArticleController.likeArticle);
//
// //GET SELECTED ARTICLE
// route.get('/details/:id/:userid', ArticleController.getSelectedArticle);

// //GET ALL LIKED ARTICLE
// route.get('/like/:id', ArticleController.getAllLikedArticle);

module.exports = route;
