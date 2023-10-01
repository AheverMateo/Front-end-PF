//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './Component/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import NotFound from './Component/NotFound/NotFound'
//import Paginado from './Component/Paginado/Paginado';
import Detail from './Component/Detail/Detail';

import NotFound from "./Component/NotFound/NotFound"
import ListCards from "./Component/ListCards/ListCards"
function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route path="/Detail" element={<Detail />} />
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </div>
  )
}

export default App
