//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './Component/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import Paginado from './Component/Paginado/Paginado';

function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/paginado' element={<Paginado/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/> 
      </Routes>
    </div>
  )
}

export default App
