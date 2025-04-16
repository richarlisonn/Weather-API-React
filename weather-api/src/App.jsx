import { useState, useRef } from 'react'
import axios from 'axios'
import { Search } from 'lucide-react';
import './App.css'

function App() {
  const [weather, setWeather] = useState({})

  const inputRef = useRef()

  async function city(){
    const cityName = inputRef.current.value
    const apiKey = '4a2ba0f48e7dae6a5249c3b53ee1b70d'
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(urlApi)
    setWeather(apiInfo.data)
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
