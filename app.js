const http = require('http');
const express= require('express');

const  app =express();

app.use((req,res,next)=>{
    console.log("this is first middleware");
    res.send("<h1>Hi guys good morning!</h1>")
});
app.use((req,res,next)=>{
    console.log("this is secound middleware");
    res.send("<h1>welcome!</h1>")
});
const sever=http.createServer(app);
sever.listen(3000);