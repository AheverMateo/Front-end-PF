import {Routes, Router, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import Paginado from './Component/Paginado/Paginado'
import NonRegisteredHome from './Views/NonRegisteredHome/NonRegisteredHome'
import NotFound from "./Component/NotFound/NotFound"
function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/paginado' element={<Paginado/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/>
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </div>
  )
}

export default App
