var express=require("express");
var Router=express.Router();

var insta=[];

Router.get("/instaReg",(req,res)=>{
    res.sendFile(__dirname+"/insta.html")
    
})

Router.get("/instaTemp",(req,res)=>{
    insta.push(req.query);
    res.render('/insta.template',{allinsta:insta});
})

Router.get("/fbReg",(req,res)=>{
    res.send("I hate Facebook")
})

module.exports =Router;