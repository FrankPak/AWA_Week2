const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/hello", (req,res) => {
    res.json({msg:"Hello World"})

});

app.get("/echo/:id", (req,res) => {
    res.json({id:req.params.id})

});

app.post("/sum", (req, res) => {
    let sum = 0;
    res.json({sum:req.body.numbers.reduce(myFunc)})
})

function myFunc(total, num) {
    return total = total + num;
}

app.listen(port, () => console.log(`Server listening a port ${port}!`));

