const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {

    // console.log(req.body);

    const user = User(req.body);

    try {
        await user.save();
        res.send("User Created Successfully !!");
    }
    catch (err) {
        res.status(400).send("Error Saving the user :", err.message);
    }
});

app.get("/user", async (req, res) => {
    const emailId = req.body.emailId;

    try {
        const user = await User.find({ emailId: emailId });
        if (!user) {
            res.send("Something Went Wrong !!")
        } else {
            res.send(user);
        }

    } catch (err) {
        res.status(404).send("Something Went Wrong !!", err)
    }
});

app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({});
        if (!users) {
            res.send("Something Went Wrong !!")
        } else {
            res.send(users);
        }

    } catch (err) {
        res.status(404).send("Something Went Wrong !!", err)
    }
});

app.delete("/user", async (req,res) => {
    const userId = req.body._id;
    try{
        await User.findByIdAndDelete(userId);
        res.send("User Deleted Successfully !!")
    }catch (err){
        res.send("User Can't Deleted !!")
    }
});

//Update User By Id

app.patch("/user",async (req,res) => {
    const userId = req.body.userId;
    const userData = req.body;

    try{
       const user = await User.findByIdAndUpdate(userId,userData,{returnDocument:"after"});
       console.log(user);
        res.send("User Updated Successfully !!");
    }catch(err){
        res.send("User Can't Updated !!")
    }
});

//Update User By Email Id

// app.patch("/user",async (req,res) => {
//     const emailId = req.body.emailId;
//     const userData = req.body;

//     try{
//        const user = await User.findOneAndUpdate({emailId:emailId},userData);
//        console.log(user);
//         res.send("User Updated Successfully !!");
//     }catch(err){
//         res.send("User Can't Updated !!")
//     }
// });

// app.get("/userbyid", async (req, res) => {
//        const id = req.body._id;
//     try {
//         const users = await User.findById({_id:id});
//         if (!users) {
//             res.send("Something Went Wrong !!")
//         } else {
//             res.send(users);
//         }

//     } catch (err) {
//         res.status(404).send("Something Went Wrong !!", err)
//     }
// });

connectDB()
    .then(() => {
        console.log("Database connection establieshed !");
        app.listen(3000, () => {
            console.log("Server is running on PORT : 3000 ");
        })
    })
    .catch((err) => {
        console.log("Database can't connected !!", err);
    });

