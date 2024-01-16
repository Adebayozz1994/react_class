

// import { Button } from "bootstrap"
import About from "./components/About"
import Main from "./components/Main"
import Footer from "./components/footer"
import Buttonn from "./components/Button"
function App () {
  return(
    <>
    <About/>
    <Footer/>
    <Main/>
    <Buttonn style="text-orange-500" title={"Edit"}/>
    <Buttonn style="text-yellow-500" title={"Delete"}/>
    <Buttonn title={"Create"}/>

   </> 
  )
}



export default App