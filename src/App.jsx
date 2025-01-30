import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
     <div className='flex justify-center items-center h-screen bg-teal-600 '>
     <div className='bg-white rounded-md p-5 drop-shadow-3xl md:w-96 w-56'>
        <h1 className='md:text-4xl p-5 font-link'>Hello Mirror Input</h1>
        <input type="md:text-2xl p-3 outline font-link md:m-5" placeholder='Write Here to see ' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='py-3 md:text-2xl md:px-3 rounded-md'/>
        <p className='md:text-3xl font-link my-3'>Your Text Is: <h4 className='md:text-3xl font-link text-teal-600 m-6'>{inputValue}</h4></p>
      </div>
     </div>
    </>
  )
}

export default App
