const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

var username = "pradeep"
var password ="12345"

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.post("/login",(req,res)=>{
    if(req.body.username === username && req.body.password === password){
        res.send(true);
    }
    else{
        res.send(false);
    }

})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
