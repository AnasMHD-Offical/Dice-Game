import styled from "styled-components"
import Landingpage from "./Components/Landing Page/Landingpage"
import React,{useState} from "react"
import Homepage from "./Components/Home Page/Homepage"
function App() {

  const [isGameSarted,setIsGameStarted] = useState(false)
  
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {isGameSarted ? <Homepage/> : <Landingpage toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
