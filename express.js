var express = require('express');//express
var app = express();

app.set('view engine', 'pug');//pug
app.set('views','./views');

app.use(express.urlencoded({extended:true}))//body parser
app.use(express.json())

app.use(express.static(__dirname + "/staticFile"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/homepage.html")//homepage
})

var studentRoute=require("./student_route")//student Route

app.use("/student",(req,res,next)=>{
    console.log("middleware for student");
    next();
})
app.use("/student",studentRoute)

var EmployeeRoute=require("./employee_route")//Employee Route
app.use("/employee",EmployeeRoute)

app.listen(9090,()=>{console.log("iam in 9090");})