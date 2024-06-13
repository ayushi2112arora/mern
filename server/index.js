//require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connection = require("./utils/db");

app.use(express.json());
app.use("/api/auth/",router);

//mount the router-> to use the router in your main express app , u can "mount" it ar a specific url prefix eg:like a add which place 

// app.get("/",(req,res)=>{
//      res.send("welcome to our page");
// });
// app.get("/registration",(req,res)=>{
//     res.send("registration page");
// });
const port = 8080;

connection().then(()=>{
app.listen(port,()=>{
    console.log(`server is running at port: ${port}`);
})
});

