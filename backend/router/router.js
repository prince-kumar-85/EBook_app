const express = require('express');
const router=express.Router();
const {createBook}=require("../controller/bookController")

router.post("/createbook",createBook)


module.exports=router;