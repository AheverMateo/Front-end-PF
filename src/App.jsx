import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './Component/Login/Login'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
