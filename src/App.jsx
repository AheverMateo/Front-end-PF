//import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from "react-router-dom";
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";
import Register from './components/Register/Register';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<NonRegisteredHome />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
    </div>
  )
}

export default App
