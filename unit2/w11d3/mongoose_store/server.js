const express = require("express");
const app = express();

//include the method-override package
const methodOverride = require('method-override');
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

//middleware
app.use(express.urlencoded({ extended: true }));

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");
// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/productsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

//controller
const productsController = require('./controllers/products.js');
//any routes that comes in for /fruits will reference fruitsController
app.use('/products', productsController);



// Web server:
app.listen(3000, () => {
    console.log("listening");
  });