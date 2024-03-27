let resmodel=require("../models/result")
let addres=async(req,res)=>{
    try{
    let resobj=await resmodel.findById({"_id":req.body._id})
    if(resobj)
    {
        res.send("hno exists in db")
    }
    else{
  await  new resmodel(req.body).save()
  res.send("record added")
    }
    }
    catch(err)
    {
        res.send(err)
    }
}

let getres=async(req,res)=>{
    try{
    let data=await resmodel.find()
    res.json(data)
    }
    catch(err)
    {
        console.log(err)
    }
}
let getbyhno=async(req,res)=>{
    try{
    let data=await resmodel.findById({"_id":req.params.hno})
    res.json(data)
    }
    catch(err)
    {
        console.log(err)
    }

}

let update=async(req,res)=>{
    try{
        await resmodel.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.send("updation done")

    }
    catch(err)
    {
        console.log(err)
    }
}
let del=async(req,res)=>{
    try{
        await resmodel.findByIdAndDelete({"_id":req.params.hno})
        res.send("del done")

    }
    catch(err)
    {
        console.log(err)
    }

}
module.exports={addres,getbyhno,getres,update,del}