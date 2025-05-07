const user=require('../model/usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const userSignup=async(req, res)=>{
    const {name,email,password} = req.body;
    try{
        const exitingUser=await user.findOne({email});
        if(exitingUser){
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
        console.error("Signup Error:",error);
        return res.status(500).json({message:"Internal server error"}); 
    }
}

const userLogin = async (req,res)=>{
     const {email,password}=req.body;
     try{
        const exitingUser=await user.findOne({email});
        if(!exitingUser){
            return res.status(400).json({message:"User Not found"})
        }
        const isPasswordValid=await bcrypt.compare(password,exitingUser.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"})
        }   
        const token=jwt.sign({id:exitingUser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        return res.status(200).json({message:"Login successful",token, user:{id:exitingUser._id,name:exitingUser.name,email:exitingUser.email}})
     }
        catch(error){
            console.error("Login Error:",error);
            return res.status(500).json({message:"Internal server error"}); 
        }
}



module.exports={
    userSignup,
    userLogin
}