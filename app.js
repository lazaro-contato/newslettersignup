// ----------------- REQUIRES ----------------- //
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

// ----------------- GET METHOD ----------------- //
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})
 

// ----------------- LISTENER ----------------- //
app.listen(3000, function(){
    console.log("Server rodando")
})