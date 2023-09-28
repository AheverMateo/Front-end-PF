//import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from "react-router-dom";
import  NonRegisteredHome  from "./views/NonRegisteredHome/NonRegisteredHome";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<NonRegisteredHome />} />
        
      </Routes>
    </div>
  )
}

export default App
