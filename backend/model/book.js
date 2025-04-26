const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    coverImage:{
        type:String,
        required:false,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model("book", userSchema); // better name!
