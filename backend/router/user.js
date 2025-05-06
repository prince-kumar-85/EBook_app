const express= require('express');
const router=express.Router();
const {userSignup}=require('../controller/userController');


router.post('/signup',userSignup);

module.exports=router;