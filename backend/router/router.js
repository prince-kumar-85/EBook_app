const express = require('express');
const router=express.Router();
const {createBook,getBook}=require("../controller/bookController")

router.post("/createbook",createBook)
router.get("/getbook",getBook)


module.exports=router;