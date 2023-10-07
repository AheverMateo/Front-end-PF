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
import UploadImages from './Component/UploadImages/UploadImages';
import Favs from './Component/Favorite/Favs';
import {Cloudinary} from "@cloudinary/url-gen";


function App() {
   // Create a Cloudinary instance and set your cloud name.
  //  const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dy8pp1s5f'
  //   }
  // });
  
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
        <Route path='/uploadImages' element={<UploadImages/>} />
        <Route path='/Favorites' element={<Favs />}/>
      </Routes>
    </div>
  )
}

export default App
