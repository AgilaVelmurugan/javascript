var express=require("express");
var app= express();

app.set('view engine', 'pug');//pug
app.set('views','./views');

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/praveen.home.html");
})

var InstagramRoutes =require("./instagram.Reg")
app.use("/instagram",InstagramRoutes)


var FacebookRoutes =require("./instagram.Reg")
app.use("/facebook",FacebookRoutes)



app.listen(8070,()=>{console.log("Iam Listening 8070...Don't Worry...");})