const express=require("express") 

const app=express() 

app.use("/",(req,res)=>{
    res.send("Kala Bhairavaa!")
})


app.listen(1000,()=>{
    console.log("Server is Running")
})