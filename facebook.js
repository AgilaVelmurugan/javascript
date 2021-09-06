var express = require('express');//express
var app = express();

app.set('view engine', 'pug');//pug
app.set('views','./views');

app.get("/",(req,res)=>{
    res.render("facebook");//homepage
})

app.listen(9080,()=>{console.log("iam in 9080");})