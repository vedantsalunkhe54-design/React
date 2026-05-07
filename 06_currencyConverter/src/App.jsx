import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-orange-600 text-3xl text-center'>
        Hello
      </h1>
    </div>
  )
}

export default App
