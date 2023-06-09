const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const apiData = require("./data.json");
const cors = require("cors");

app.use(cors());
app.get("/",(req,res)=>{
    res.send(apiData);
});

app.listen(port,()=>{
    console.log("I am live");
});