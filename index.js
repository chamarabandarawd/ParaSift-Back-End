 import express from "express";
 const app=express();

 const PORT=8001;

 let post=[];

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })
