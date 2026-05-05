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
       setCounter(prevCounter => prevCounter + 1)
       setCounter(prevCounter => prevCounter + 1)
       setCounter(prevCounter => prevCounter + 1)
       setCounter(prevCounter => prevCounter + 1)

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




// The interview question was the we we add setCounter() method multiple times and add counter + 1 everytime 
// what will be the O/p  does it add by 1 or it directly jumped to 19 
// The answer to the question is that the when we click the button the counter will only add by 1

// to make the counter add multiple time we have to create the function in the setCounter() method
//By doing so we can add multiple counter values

