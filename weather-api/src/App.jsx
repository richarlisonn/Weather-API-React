import { useState, useRef } from 'react'
import { Search } from 'lucide-react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  const apiKey = '4a2ba0f48e7dae6a5249c3b53ee1b70d'
  function city(){
    console.log(inputRef.current.value)

  }
  return (
    <>
      <div className="main_section">
        <header>
          <h1>WEATHER 
            <span> NOW</span>
            </h1>
        </header>
        
        <div 
        className="api_search">
          <Search size={20} />
          
          <input
           type="text"  
           id="text_user" 
           ref={inputRef}
           placeholder='Enter a Place:'
           />

          <button onClick={city}>Enter</button>
        </div>
      </div>
    </>
  )
}

export default App
