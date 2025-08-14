const express =require('express')
var firstModel = require('./userschema');
const bcrypt = require("bcrypt");

const router = express.Router();

//router.get("/",(req,res)=>{
    //res.json(message:"API is working!")
    //});



   router.get(`/`, async function (req,res) {
    try{
        const list = await firstModel.find();
        res.send(list);
    }catch(err) {
        console.log('error fetching data:',err);
        res.status(500).send('error fetching data');
    }
});

//user signup route
router.post("/signup", async (req,res) => {
    try {
        const {name,email,password} = req.body;

        //hash the password before saving it
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new firstModel({ name,email,password:hashedPassword})
        await newUser.save();

        res.status(201).json({message:"user register successfully"});
    }catch(err){
        res.status(500).json({error:"signup faild", details: err.message});
        
    }
});



module.exports=router

//routes.js or similer