const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require("https")

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json())
 

 
app.use(express.static("public"));
app.use(express.static(__dirname));
 
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});


app.post("/", function(req, res){

    const name = req.body.fName;
    const secondName = req.body.sName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: name,
                    LNAME: secondName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    const url = "https://us6.api.mailchimp.com/3.0/lists/d1f78d5da1"

    const options = {
        method: "POST",
        auth: "lazaro:d7e3fa315063ae96458a38253421b1cd-us6"

    }

    const request = https.request(url, options, function(response){
            response.on("data", function(data){
                console.log(JSON.parse(data))
            })
    })

    request.write(jsonData)
    request.end
})
 
app.listen(3000, function() {
     console.log("Example app listening MACHO");
});

//API KEY d7e3fa315063ae96458a38253421b1cd-us6
//Audience ID d1f78d5da1