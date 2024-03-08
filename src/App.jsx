

// import { Button } from "bootstrap"
import About from "./components/About"
import Main from "./components/Main"
import Footer from "./components/footer"
import Buttonn from "./components/Button"
import Tenary from "./components/Tenary"
import Fetch from "./components/Fetch"
import Classwork from "./components/classwork"
import Sportify from "./components/Sportify"
import Music from "./components/music"
import LogIn from "./components/LogIn"
import Assignment from "./components/assignment"
import { Routes, Route, Navigate } from "react-router-dom"
import FileUpload from "./components/FileUpload"
import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import PictureFetch from "./components/PictureFetch"

function App () {
  let token = localStorage.getItem("token")
  return( 
    <>
    <Routes>
      <Route path="/pix" element={<PictureFetch/>}/>
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Assignment/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />}/>

      <Route path= "/Upload" element={<FileUpload/>}/>
    </Routes>
    
    {/* <Music/> */}
    {/* <Sportify/> */}
    {/* <Classwork/> */}
    {/* <Fetch/> */}
    {/* <Assignment /> */}
    {/* <LogIn/> */}
    {/* <Tenary /> */}
    {/* <About/> */}
    {/* <Footer/> */}
    {/* <Main/> */}
    {/* <Buttonn style="text-orange-500" title={"Edit"}/> */}
    {/* <Buttonn style="text-yellow-500" title={"Delete"}/> */}
    {/* <Buttonn title={"Create"}/> */}

   </> 
  )
}



export default App