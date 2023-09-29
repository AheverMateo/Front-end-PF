import {Routes, Router, Route} from "react-router-dom"
import Login from './Component/Login/Login'
import NonRegisteredHome from './Views/NonRegisteredHome/NonRegisteredHome'
import NotFound from "./Component/NotFound/NotFound"
import ListCards from "./Component/ListCards/ListCards"
function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/List' element={<ListCards/>}/>
        <Route exact path='/' element={<NonRegisteredHome/>}/>
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </div>
  )
}

export default App
