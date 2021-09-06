const e = require("express");
var express=require("express");
var route = express.Router();

var student=[
    {
        name: 'bhuvanesh',
        email: 'bhuvanesh@gmail.com',
        mobile: 111
    },
    {
        name: 'agila',
        email: 'agila@gmail.com',
        mobile: 222
    },
    {
        name: 'siva',
        email: 'siva@gmail.com',
        mobile: 333
    }
];

//student
route.get("/stureg",(req,res)=>{
    res.sendFile(__dirname+"/sturegistration.html")
})
route.get("/sturegister",(req,res)=>{
    student.push(req.query)
    res.send("student registered successfully")
})
route.get("/stulist",(req,res)=>{
    res.render("student",{
        allstudents:student})
})
route.get("/details/:name",(req,res)=>{
    var std = student.find(e=>{
        if (e.name===req.params.name)
        {
           return true;
        }
    })
    res.render("studspecific",{details:std})
})


module.exports = route;