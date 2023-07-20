const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/hello", (req,res) => {
    res.json({msg:"Hello World"})

});


app.listen(port, () => console.log(`Server listening a port ${port}!`));

