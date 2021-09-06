var express=require("express");
var route = express.Router();

var employee=[
   { 
        name: 'sk',
        email: 'sk@gmail.com',
        mobile: 9847654293,
        salary: '40K',
        experiance: 4
    },
    { 
        name: 'sivakarthikeyan',
        email: 'karthi@gmail.com',
        mobile: 984765,
        salary: '400K',
        experiance: 4
    }
];

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
route.get("/details/:name",(req,res)=>{
    var emp = employee.find(e=>{
        if (e.name===req.params.name)
        {
           return true;
        }
    })
    res.render("empspecific",{details:emp})
})
module.exports = route;