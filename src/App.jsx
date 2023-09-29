import {Routes, Router, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import NonRegisteredHome from './Views/NonRegisteredHome/NonRegisteredHome'
import ListCards from "./Component/ListCards/ListCards"
function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/List' element={<ListCards/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/> 

      </Routes>
    </div>
  )
}

export default App
