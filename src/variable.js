var a= require('express');
var x=require('mongoose');
var app=a();
app.get('/detail',()=>{
console.log("write");
})
x.connect("mongodb://localhost:27017/abc",()=>{
    console.log("connected");
})
app.listen(5000)