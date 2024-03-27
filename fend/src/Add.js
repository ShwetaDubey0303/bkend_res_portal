import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
  let [data,setData]=useState({"_id":"","name":"","phno":"","sub1":"","sub2":"","sub3":"","sub4":""})
  let [res,setRes]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let add=()=>{
    axios.post("http://localhost:5000/add",data).then((res)=>{
      setRes(res.data)
      if(res.data=="record added")
      {
        setData({"_id":"","name":"","phno":"","sub1":"","sub2":"","sub3":"","sub4":""})
      }


    })

  }
  return (
    <div>
      <div>{res}</div>
      <input type='text' placeholder='enter hno' name="_id" onChange={fun} value={data._id}/>
      <input type='text' placeholder='enter name' name="name" onChange={fun} value={data.name}/>
      <input type='text' placeholder='enter phno' name="phno" onChange={fun} value={data.phno}/>
      <input type='text' placeholder='enter sub1' name="sub1" onChange={fun} value={data.sub1}/>
      <input type='text' placeholder='enter sub2' name="sub2" onChange={fun} value={data.sub2}/>
      <input type='text' placeholder='enter sub3' name="sub3" onChange={fun} value={data.sub3}/>
      <input type='text' placeholder='enter sub4' name="sub4" onChange={fun} value={data.sub4}/>
      <button onClick={add}>Add</button>

    </div>
  )
}

export default Add