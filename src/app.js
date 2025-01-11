const express = require("express");


const app = express();
const port = 7777;

app.get("/",(req,res) => {
    res.send("This is a dashboard !")
});

app.get("/hello",(req,res) => {
    res.send("Hello Hello !")
});




app.listen(port,() => {
    console.log(`Server is running on PORT : ${port}`);
})