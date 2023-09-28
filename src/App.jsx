import {Routes, Router, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import Paginado from './Component/Paginado/Paginado'
import NonRegisteredHome from './Views/NonRegisteredHome/NonRegisteredHome'
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
