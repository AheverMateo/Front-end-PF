//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './Component/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'
//import NotFound from './Component/NotFound/NotFound'
import Home from './Component/Home/Home';
import Detail from './Component/Detail/Detail';
import NotFound from "./Component/NotFound/NotFound"
import PostMovie from "./Component/PostMovie/PostMovie"
function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path="*" element={<NotFound/>}/> 
        <Route path="/createMovie" element={<PostMovie />} />
      </Routes>
    </div>
  )
}

export default App
