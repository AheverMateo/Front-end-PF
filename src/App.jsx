//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './Component/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Detail from './Component/Detail/Detail';
import NotFound from "./Component/NotFound/NotFound";
import Cart from './Component/Cart/Cart';
import PostMovie from "./Component/PostMovie/PostMovie"
import Favs from './Component/Favorite/Favs';
import UploadImagesTohome from './Component/UploadImages/uploadImagesTohome';



function App() {
  
  return (
    <div>
      <Routes>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path="*" element={<NotFound/>}/> 
        <Route path='/PostMovie' element={<PostMovie/>}/>  
        <Route path='/uploadImages' element={<UploadImagesTohome/>} />
        <Route path='/Favorites' element={<Favs />}/>
      </Routes>
    </div>
  )
}

export default App
