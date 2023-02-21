const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    gender:String,
    name:Object,
    location:Object,
    email:String,
    phone:String,
    picture:Object,
    age:String
})
const userModel=mongoose.model("cointabuser",userSchema);
module.exports=userModel;