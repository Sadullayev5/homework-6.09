import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Register from './Register/Register'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default RouteController