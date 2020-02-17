const express = require('express');
const app = express();
const budget = require('./models/budget.js');

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

app.use(express.urlencoded({extended:false}));


//post route 
app.post("/index", (req, res) => {
    budget.push(req.body);
    console.log(budget)
    res.redirect('/index'); //send the user back to /fruits
});

//new
app.get("/budget/new", (req, res) => {
    res.render("new.ejs", {budget: budget[req.params.id]});
})


//show
app.get("/index/:id", (req, res) => {
    res.render("show.ejs", {budget: budget[req.params.id]});
})

//index
app.get('/index', (req, res) => {
    res.render("index.ejs", {budget: budget});
});



app.get('/', (req, res) => {
    res.send("Hello World!");
});



app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});