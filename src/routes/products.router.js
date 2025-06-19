const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => res.json(products));
});

router.get('/products/:id', (req, res) => {
  fetch('https://fakestoreapi.com/products/' + req.params.id)
  .then(res => res.json())
  .then(product => res.json(product));
});

module.exports =  router;
