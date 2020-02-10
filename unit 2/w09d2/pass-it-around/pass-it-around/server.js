const express = require("express");

const app = express()


app.get("/:number_of_beers", (req, res)=> {
    
    let number = req.params.number_of_beers - 1
    
    if (req.params.number_of_beers > 0) {
        res.send(`
            <h1>${req.params.number_of_beers} Bottles of beer on the wall</h1>
            <a href="${number}">take one down, pass it around</a>
            `);
        }
        else {
            res.send(`
                <h1>0 Bottle of beer on the wall</h1>
                <a href="99">Lets Start over</a>
                `);
            }
    })















app.listen(3000, ()=>[
    console.log("im listening to port", 3000)

])