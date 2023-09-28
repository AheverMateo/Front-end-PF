import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import Paginado from './Component/Paginado/Paginado'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/paginado' element={<Paginado/>}/>
      </Routes>
    </div>
  )
}

export default App
