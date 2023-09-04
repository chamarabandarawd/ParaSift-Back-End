 import express from "express";
 const app=express();

 const PORT=5000;

 let post=[];

 app.get("/posts",(req,res)=>{
   res.send("hi")
 })

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })
