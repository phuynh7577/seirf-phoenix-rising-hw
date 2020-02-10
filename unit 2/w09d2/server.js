const express = require("express");

const app = express()






app.get("/greeting/:name", (req, res)=> {
    res.send(`Hello, ${req.params.name}. It's greet to see you!`);
})






app.get("/tip/:total/:tipPercentage", (req, res)=> {
    let total = req.params.total
    let percentage = req.params.tipPercentage/100
    let tip = total * percentage
    res.send(`Tipping: $${tip}`);
})






const magicResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res)=> {
    let random = magicResponse[Math.floor(Math.random() * 22)]
    res.send(`
    <h1>${random}</h1>
    `);
})




















app.listen(3000, ()=>[
    console.log("im listening to port", 3000)
])