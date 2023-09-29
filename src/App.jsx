//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './Component/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import NotFound from './Component/NotFound/NotFound'
import Paginado from './Component/Paginado/Paginado';
import Detail from './Component/Detail/Detail';

function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/paginado' element={<Paginado/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/> 
        <Route path="/Detail" element={<Detail />} />
        <Route exact path='/NotFound' element={<NotFound />}/> 
      </Routes>
    </div>
  )
}

export default App
