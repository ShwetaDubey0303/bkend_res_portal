let express=require("express")
const { getres, getbyhno, addres, update, del } = require("../controllers/rescon")
let route=new express.Router()
route.get("/getall",getres)
route.get("/getres/:hno",getbyhno)
route.post("/add",addres)
route.put("/update",update)
route.delete("/del/:hno",del)
module.exports=route