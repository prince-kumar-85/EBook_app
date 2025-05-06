const book=require('../model/usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const userSignup=async(req, res)=>{
    const {name,email,password} = req.body;
    try{
        const exitingUser=await user.find({email});
        if(exitingUser.length){
            return res.status(400).json({message:"User already exists"});

        }
        const hashedPassword=await bcrypt.hash(password,10);

        const newUser= new user({
            name,
            email,
            password:hashedPassword

        })
        await newUser.save();
        return res.status(201).json({message:"User created successfully"}); 
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"}); 
    }
}



module.exports={
    userSignup
}