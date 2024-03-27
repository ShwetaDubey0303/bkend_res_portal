import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getres = () => {
  let [data,setData]=useState([])
  let [res,setRes]=useState({"_id":"","name":"","phno":"","sub1":"","sub2":"","sub3":"","sub4":""})
  let fun=(e)=>{
    setRes({...res,[e.target.name]:e.target.value})

  }
  useEffect(()=>{
    axios.get("http://localhost:5000/getall").then((res)=>{
      setData(res.data)
    })

  },[])
  let edit=(item)=>{
    setRes({...item})

  }
  let update=()=>{
    axios.put("http://localhost:5000/update",res).then((res)=>{
      axios.get("http://localhost:5000/getall").then((res)=>{
      setData(res.data)
      setRes({"_id":"","name":"","phno":"","sub1":"","sub2":"","sub3":"","sub4":""})
    })

    })

  }
  let del=(hno)=>{
    axios.delete(`http://localhost:5000/del/${hno}`).then(()=>{
      axios.get("http://localhost:5000/getall").then((res)=>{
        setData(res.data)
      })
    })
  }
  return (
    <div>

    { 
    res._id!=""&& <div>
      <input type='text' placeholder='enter hno' name="_id" onChange={fun} value={res._id} readOnly/>
      <input type='text' placeholder='enter name' name="name" onChange={fun} value={res.name}/>
      <input type='text' placeholder='enter phno' name="phno" onChange={fun} value={res.phno}/>
      <input type='text' placeholder='enter sub1' name="sub1" onChange={fun} value={res.sub1}/>
      <input type='text' placeholder='enter sub2' name="sub2" onChange={fun} value={res.sub2}/>
      <input type='text' placeholder='enter sub3' name="sub3" onChange={fun} value={res.sub3}/>
      <input type='text' placeholder='enter sub4' name="sub4" onChange={fun} value={res.sub4}/>
      <button onClick={update}>Update</button>


      </div>
      }
      {
        data.length>0&&<table>
          <tr>
            <th>HNO</th>
            <th>Name</th>
            <th>Phno</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Sub4</th>
          </tr>
          {data.map((item)=>{
            return (<tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.phno}</td>
              <td>{item.sub1}</td>
              <td>{item.sub2}</td>
              <td>{item.sub3}</td>
              <td>{item.sub4}</td>
              <td><button onClick={()=>edit(item)}>Edit</button></td>
            <td><button onClick={()=>del(item._id)}>Delete</button></td>
            </tr>)
          })}
        </table>
      }
    </div>
  )
}

export default Getres