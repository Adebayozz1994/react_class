

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
import { Routes, Route } from "react-router-dom"


function App () {
  return(
    <>
    <Routes>
      <Route path="/" element={<Assignment/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/sportify" element={<Sportify/>}/>


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