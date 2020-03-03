const express = require('express');
const router = express.Router();

const product = require('../models/products.js');


//new route
router.get("/new", (req, res) => {
  res.render("new.ejs");
});
// CREATE
router.post("/", (req, res) => {
  product.create(req.body, (error, result) => {
    res.redirect("/products");
  });
});


// SECRET SEED ROUTE
router.get("/seed", (req, res) => {
    product.create(
        [
        {
            name: 'Beans',
            description: 'A small pile of beans. Buy more beans for a big pile of beans.',
            img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
            price: 5,
            qty: 99
        }, {
            name: 'Bones',
            description: 'It\'s just a bag of bones.',
            img: 'http://bluelips.com/prod_images_large/bones1.jpg',
            price: 25,
            qty: 0
        }, {
            name: 'Bins',
            description: 'A stack of colorful bins for your beans and bones.',
            img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
            price: 7000,
            qty: 1
        }
        ],
      (error, data) => {
        console.log(data);
        res.redirect("/products");
      }
    );
  });


//show
router.get("/:id", (req, res) => {
  product.findById(req.params.id, (err, foundProduct) => {
    res.render("show.ejs", {
      product: foundProduct
    });
  });
});


// INDEX
router.get("/", (req, res) => {
    product.find({}, (error, product) => {
      res.render("index.ejs", { product });
    });
  });

//delete
router.delete('/:id', (req, res)=>{
  product.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/products');
});
});

//edit
router.get('/:id/edit', (req, res)=>{
  product.findById(req.params.id, (err, products)=>{
      res.render('edit.ejs',{product: products}
    );
  });
});

//update
router.put('/:id', (req, res)=>{
  product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
    
    res.redirect(`/products`);
});
});


//buy
router.get('/:id/buy', (req, res)=>{
  product.findById(req.params.id, (err, products)=>{
      res.render('buy.ejs',{product: products}
    );
  });
});


//buy update
router.put('/:id', (req, res)=>{
  product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
    
    res.redirect(`/products`);
});
});











  module.exports = router;