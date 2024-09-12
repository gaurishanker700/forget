import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Register from './component/Register'
import Login from './component/Login'
import Forget from './component/Forget'


function App() {
  return (
    // <div>
    //   <h1>hello</h1>
    // </div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forget" element={<Forget/>}></Route>
      


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
