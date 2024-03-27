import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Getres from './Getres'
import Add from './Add'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/get' element={<Getres/>}/>
      <Route path='/add' element={<Add/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App