let mongoose=require("mongoose")
let ressch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "phno":String,
    "sub1":Number,
    "sub2":Number,
    "sub3":Number,
    "sub4":Number,
})
module.exports=mongoose.model("results",ressch)