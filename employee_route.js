var express=require("express");
var route = express.Router();

var employee=[];

//employees
route.get("/empreg",(req,res)=>{
    res.sendFile(__dirname+"/empregistration.html")
})
route.get("/empregister",(req,res)=>{
    employee.push(req.query)
    res.send("Employee registered successfully")
})
route.get("/emplist",(req,res)=>{
    res.render("employee",{allemployees:employee})
})
module.exports = route;