import { useState } from 'react'
import { Search } from 'lucide-react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main_section">
        <header>
          <h1>WEATHER <span> NOW</span></h1>
        </header>
        <div className="api_search">
          <Search size={20} />
          <input type="text"  id="text_user" placeholder='Enter a Place:  '/>
          <button>Enter</button>
        </div>
      </div>
    </>
  )
}

export default App
