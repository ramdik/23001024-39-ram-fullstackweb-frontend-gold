import '../src/assets/styles/global.css'
import "../src/assets/styles/reset.css"
import Home from './pages/Home.jsx'
import Register from "./pages/Register"
import NavigationBar from './components/NavigationBar.jsx'
import { Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.jsx'
import CreateOffer from './pages/CreateOffer.jsx'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<Admin />} />
        <Route path='add-offer' element={<CreateOffer/>}/>
      </Routes>
    </>
  )
}

export default App
