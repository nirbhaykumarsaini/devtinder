const express = require("express");
const {adminAuth,userAuth} = require("./middlewares/authMiddleware");


const app = express();

app.use("/admin", adminAuth);

app.get("/user/data" , userAuth, (req,res) => {
    res.send("All User Data Sent !")
})

app.use("/user/login" , (req,res) => {
    res.send("User logged in Successfully !!");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent !");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("User Deleted Successfully !")
})

app.listen(3000, () => {
    console.log("Server is running on PORT : 3000 ");
})