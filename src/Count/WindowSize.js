import React ,{useEffect, useState} from 'react'
import './window.css'
function WindowSize() {
  const [windowcount, setWindowcount] = useState(window.screen.width);
const  acturalWidth=()=>{
  setWindowcount(window.innerWidth)
}
  useEffect(()=>{
    window.addEventListener("resize",acturalWidth)
    return(
      ()=>{
        window.removeEventListener("resize",acturalWidth)

      }
    )
  })
  return (
    <div >
        <p>The actural size of the window is</p> 
        <h1>{windowcount}</h1>
    </div>
  )
}

export default WindowSize
