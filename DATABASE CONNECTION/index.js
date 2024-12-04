const express=require("express")
const connection=require("./connection")
const app=express()
const port=3000
const userrouter=require("./routes/user")


//connecting mongodb
connection.connectMongodb('mongodb://127.0.0.1:27017/student')

//middlewire
app.use(express.urlencoded({extended: false}));
//routes
app.use("/user",userrouter)
app.listen(port,()=>console.log("Server started"))
