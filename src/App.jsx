//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './Component/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'
//import NotFound from "./Component/NotFound"
import Detail from './Component/Detail/Detail';
import SearchBar from './Component/SearchBar/SearchBar';
import ListCards from './Component/ListCards/ListCards';
function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/>
        <Route path="/Detail" element={<Detail />} />
        <Route exact path='/card' element= {<ListCards/>}/>
        <Route exact path='/busca' element= {<SearchBar/>}/>
      </Routes>
    </div>
  )
}

export default App
