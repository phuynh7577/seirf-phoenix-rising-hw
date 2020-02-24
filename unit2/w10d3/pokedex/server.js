const express = require('express');
const app = express();

//data
const pokedex = require('./models/pokemon.js');

app.use(express.urlencoded({extended:true}));

//include the method-override package
let methodOverride = require('method-override');

//use methodOverride.  We'll be adding a query parameter to our edit form named _method
//middleware
app.use(methodOverride('_method'));






////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// UPDATE or PUT
app.put("/pokemon/:id", (req, res) => {
    if(req.body.img === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.img = "https://i.imgflip.com/1n2sc4.jpg";
} 
    let newPoke = {}
        newPoke.stats= {}
        newPoke.stats.hp = req.body.hp
        newPoke.stats.attack = req.body.attack
        newPoke.stats.defense = req.body.defense
        newPoke.stats.speed = req.body.speed

        newPoke.name = req.body.name
        newPoke.type = req.body.type

        newPoke.img = req.body.img
        

    pokedex[req.params.id] = newPoke;

    res.redirect("/pokemon");
    // console.log(pokedex)
  });

// EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
      pokedex: pokedex[req.params.id],
      index: req.params.id
    });
  });





////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//add new item to index
app.post("/pokemon", (req, res) => {
    if(req.body.img === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.img = "https://i.imgflip.com/1n2sc4.jpg";
} else {
    req.body.img = "https://i.imgflip.com/1n2sc4.jpg";
}
let newPoke = {}
newPoke.stats= {}
newPoke.stats.hp = req.body.hp
newPoke.stats.attack = req.body.attack
newPoke.stats.defense = req.body.defense
newPoke.stats.speed = req.body.speed

newPoke.name = req.body.name
newPoke.type = req.body.type
newPoke.img = req.body.img

    pokedex.push(newPoke);
    res.redirect('/pokemon'); //send the user back to /pokemon
    // console.log(pokedex)

    
});

//new
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs", )
})






////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//show
app.get('/pokemon/:id', (request, response)=>{
    response.render('show.ejs',
        {
            pokedex: pokedex[request.params.id], id: request.params.id}
    );
});







////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//index
app.get('/pokemon', (request, response)=>{
    response.render('index.ejs', {
        pokedex: pokedex
    });
});









////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//delete
app.delete("/pokemon/:id", (req, res) => {
    pokedex.splice(req.params.id, 1) //removes items from array
    res.redirect("/pokemon"); //redirects back to index
})








////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});