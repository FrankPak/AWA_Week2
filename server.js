const express = require("express");
const os = require("os");
const app = express();
const port = 3000;
const initalValue = 0

app.use(express.json())
app.use(express.static('static'))

app.get("/hello", (req,res) => {
    res.json({msg:"Hello World"});

});

app.get("/echo/:id", (req,res) => {
    res.json({id:req.params.id});

});

app.post("/sum", (req, res) => {
    res.json({sum:req.body.numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initalValue)}) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
})


app.post("/list", (req, res) => {
    
})

app.listen(port, () => console.log(`Server listening a port ${port}!`));

