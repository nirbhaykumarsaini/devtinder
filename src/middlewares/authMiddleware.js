

const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked !!");
    const token = "abc";
    const isAuthenticate = token === "abc";
    if (!isAuthenticate) {
        res.status(401).send("Unauthraized Request !!");
    } else {
        next();
    }
};

const userAuth = (req,res, next) => {
    console.log("User auth is getting checked !!");
    const token = "abc";
    const isUserAuthenticate = token === "abc";
    if(!isUserAuthenticate){
        res.status(401).send("Unauthraized Request !!");
    }else{
        next();
    }
};


module.exports = {adminAuth,userAuth};