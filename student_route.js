var express=require("express");
var route = express.Router();

var student=[];

//student
route.get("/stureg",(req,res)=>{
    res.sendFile(__dirname+"/sturegistration.html")
})
route.get("/sturegister",(req,res)=>{
    student.push(req.query)
    res.send("student registered successfully")
})
route.get("/stulist",(req,res)=>{
    res.render("student",{allstudents:student})
})
module.exports = route;