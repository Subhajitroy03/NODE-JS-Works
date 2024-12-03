const express=require("express")
const app=express();
const port=8000;
fs=require("fs")
const user=require("./database.json")
app.use(express.urlencoded({extended: false}));
app.get("/",(req,res)=>{
    return res.send("Hi welcome to my REST API by Subhajit Roy")
})
app.get("/users",(req,res)=>{
    return res.json(user)
})
app.get("/users/:roll",(req,res)=>{
    const roll=Number(req.params.roll);
    const username=user.find((user)=>user.Roll==roll)
    return res.json(username)
})
app.post("/users",(req,res)=>{
    const body=req.body;
    user.push({...body});
    fs.writeFile("./database.json",JSON.stringify(user),(err,data)=>{
        return res.send("Data Inserted Succesfully...")
    })

})
app.listen(port,()=>console.log("Server started"))
