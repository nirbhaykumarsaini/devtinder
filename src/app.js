const express = require("express");


const app = express();

//when we use use() then it calls all the HTTP Methods 

// app.use("/user", (req,res) => {
//     res.send({firstname:"Nirbhay",lastname:"Saini"});
// });

// app.get("/user", (req,res) => {
//     console.log("API is run !")
//     res.send({firstname:"Nirbhay",lastname:"Saini"});
// });

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

// app.use("/user",
//    [ (req, res, next) => {
//         console.log("Console 1 !");
//         // res.send("Response 1 !");
//         next();
//     },
//     (req, res, next) => {
//         console.log("Console 2 !");
//         // res.send("Response 2 !");
//         next()
//     },
//     (req, res, next) => {
//         console.log("Console 3 !");
//         // res.send("Response 3 !");
//         next()
//     },
//     (req, res, next) => {
//         console.log("Console 4 !");
//         res.send("Response 4 !");
//         // next()
//     }]
// );

const route1 = function (req,res,next){
    console.log("this is console 1");
//    res.send("this is route 1");
   next();
}
const route2 = function (req,res,next){
    console.log("this is console 2");
    next()
 }

 const route3 = function (req,res){
    console.log("this is console 3");
    res.send("this is route 3");
 }

app.use("/route", [route1,route2,route3])




app.listen(3000, () => {
    console.log("Server is running on PORT : 3000");
})