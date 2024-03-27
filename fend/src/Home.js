import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
    let [data,setData]=useState("")
    let [res,setRes]=useState("")
    let [err,setErr]=useState("")
    let fun=(e)=>{
        setData(e.target.value)
    }
    let getres=()=>{
        axios.get(`http://localhost:5000/getres/${data}`).then((res)=>{
            if(res.data)
            {
                setRes(res.data)
                setErr("")
            }
            else{
                setErr("check Hno")
            }
            setData("")
        })
    }
  return (
    <div>
        <div>{err}</div>
        <input type='text' placeholder='enter HNO' onChange={fun} value={data}/>
        <button onClick={getres}>Getres</button>
        {
            err==""&&res!=""&&<div>
                <p>HNO:{res._id}</p>
                <p>name:{res.name}</p>
                <p>phno:{res.phno}</p>
                <p>sub1:{res.sub1}</p>
                <p>sub2:{res.sub2}</p>
                <p>sub3:{res.sub3}</p>
                <p>sub4:{res.sub4}</p>

            </div>
        }
    </div>
  )
}

export default Home