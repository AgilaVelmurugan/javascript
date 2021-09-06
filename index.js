var express = require("express");
var app=express();
var data=[];

app.use(express.urlencoded({extended:true}))//body parser Configuration
app.use(express.json())//body parser Configuration

app.set('view engine', 'pug');//pug Configuration
app.set('views','./views');//pug Configuration

app.get("/",(req,res)=>{
    res.render("student")
})// separate route

app.get("/registration",(req,res)=>{
    console.log("Processing File");
    res.sendFile(__dirname+"/registration.html")//for sending file as response
})
app.get("/register",(req,res)=>{
    data.push(req.query)//Query -->body parser element....Used to get the url data in get method
    res.render("student",{allstudents:data})//render--> pug element....it generates the html file using the pug Template
})


app.post("/register",(req,res)=>{
    data.push(req.body)//body--->body parser element...used to get the message body in post method(data are stored in message body)
    res.send(JSON.stringify(data))
})

app.listen(8090,()=>{console.log("Iam lisenting at 8090, Don't Worry!");})