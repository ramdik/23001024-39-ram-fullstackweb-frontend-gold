//import './App.css'
import '../src/assets/styles/global.css'
import "../src/assets/styles/reset.css"
// import NavigationBars from './components/NavigationBar.jsx'
import Home from './pages/Home.jsx'
import Login from "./pages/Login"
import NavigationBar from './components/NavigationBar.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
