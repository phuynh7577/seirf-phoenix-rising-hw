const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const port = 3000;


//show
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemon: pokemon[req.params.id]
    });
})


//index
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon: pokemon});
})


app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
})


























app.listen(port, ()=>{
    console.log('I am listening on port 3000');
});