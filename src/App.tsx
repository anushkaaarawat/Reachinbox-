import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OneBox from "./pages/OneBox"
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
