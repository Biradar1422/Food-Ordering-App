
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Success from "./components/Success"
import Error from "./components/Error"
import ProtectedRoutes from "./Comp/ProtectedRoutes"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route 
      path='/success' 
      element={<ProtectedRoutes element={<Success/>}/>}
      />
      <Route path="/*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
