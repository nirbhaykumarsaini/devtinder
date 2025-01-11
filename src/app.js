const express = require("express");


const app = express();

//when we use use() then it calls all the HTTP Methods 

// app.use("/user", (req,res) => {
//     res.send({firstname:"Nirbhay",lastname:"Saini"});
// });

app.get("/user", (req,res) => {
    res.send({firstname:"Nirbhay",lastname:"Saini"});
});

// app.get("/ab+c", (req,res) => {
//     res.send({firstname:"Nirbhay",lastname:"Saini"});
// });


// app.get("/user/:userid/:post", (req,res) => {
//     console.log(req.params);
//     res.send({firstname:"Nirbhay",lastname:"Saini"});
// });

// app.get("/user", (req,res) => {
//     console.log(req.query);
//     res.send({firstname:"Nirbhay",lastname:"Saini"});
// });




app.listen(3000,() => {
    console.log("Server is running on PORT : 3000");
})