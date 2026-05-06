import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllower] = useState(false)
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)


  // useRef HOOk
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz'
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "!@#$%^&*()~?{}[]_"

    for (let i = 0; i <= length; i++) {
      let char  = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToCaliboard = useCallback( () => {
    passRef.current?.select()
  
    // The range to select the value is decided
    passRef.current?.setSelectionRange(0, 50)

    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  }, [length,passwordGenerator,numberAllowed,charAllowed])

  return (

    <div className='w-full h-screen bg-gray-800 py-9'>
   <div className='w-full max-w-md mx-auto px-4 py-10  bg-gray-500 text-white rounded-xl'>

    <div className='text-center'>
    <h1 className='text-3xl'>
      Password Generator
    </h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4 px-10 py-3 '>

      <input
      type="text"
      value={password}
      placeholder='Password'
      ref={passRef}
      />
     
    </div>

     <div>

      <button
      className='outline-none
       bg-blue-500
        text-white 
        px-3 py-0.5 
        shrink-0
        cursor-pointer'
        onClick={copyPasswordToCaliboard}> 
          Copy 
        </button>

      </div>

    </div>
    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 my-3'>


              <input 
               type="range"
               min={6}
               max={50}
               value={length}
               className='cursor-pointer'
               onChange={(e) => {setLength(e.target.value)}}
               
               />

               <label className='text-xl'>
                Length : {length}
               </label>

        </div>

        <div className='flex item-center gap-x-1 mx-2'>

          <input
          type='checkbox'
          defaultChecked= {numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllower((prev) => !prev)
          }}
          />


          <label htmlFor="numberInput"  className='my-5'>Numbers</label>

        </div>

           <input
          type='checkbox'
          defaultChecked= {charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />


          <label htmlFor="characterInput"  className='my-5'>Characters</label>



    </div>

   </div>
   </div>
  )
}

export default App
