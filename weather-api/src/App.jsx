import { useState, useRef } from 'react'
import axios from 'axios'
import { Search } from 'lucide-react';
import './App.css'
import WeatherInformation from './components/weather-info/WeatherInformation';


function App() {

  const [weather, setWeather] = useState()

  const inputRef = useRef()

  async function apiService(){
    const cityName = inputRef.current.value
    const apiKey = '4a2ba0f48e7dae6a5249c3b53ee1b70d'
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(urlApi)
    setWeather(apiInfo.data)
  }

  return (
    <>
      <header className="main_section">
        <div className='title'>
          <h1>WEATHER 
            <span> NOW</span>
            </h1>
        </div>
        
        <div 
        className="api_search">
          <Search size={20} />
          
          <input
           type="text"  
           id="text_user" 
           ref={inputRef}
           placeholder='Enter a Place:'
           />

          <button onClick={apiService}>Enter</button>

        </div>
      </header>

  {weather &&<WeatherInformation weatherInfo={weather}/>
}    </>
  )
}

export default App
