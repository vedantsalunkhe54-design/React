// THis project is related to HOOKS here we have used the 'useState' hook 
// we can do changes in the project and can connect with the DOM



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [Counter,setCounter] = useState(15);

  // let Counter = 15

  const addValue = () => {
    if (Counter == 30){
      alert("Cannot add value bigger than 30")
    }
    else{
        // Counter = Counter + 1
       setCounter(Counter + 1)
    }

    
  }
  const removeValue = () => {
    if(Counter == 0){
      alert("Cannot remove value smaller than 0")
    }
    else{
    setCounter(Counter - 1)
    }
    
  }


  return (
    <>
      <h1>Hello VEDANT</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={addValue}>Add Value: {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {Counter}</button>
    </>
  )
}

export default App
