//import { useState } from 'react'
import './App.css'
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './components/Register/Register';
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'

function App() {
  //const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<NonRegisteredHome />} />
        <Route path="/Register" element={<Register />} />
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
