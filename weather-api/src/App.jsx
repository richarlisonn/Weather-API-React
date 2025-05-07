import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/weather-info/WeatherInformation';

function App() {
  const [weather, setWeather] = useState()
  const [error, setError] = useState('')  // Estado para a mensagem de erro
  const inputRef = useRef()

  async function apiService() {
    const cityName = inputRef.current.value.trim();  // Remove espaços extras

    if (!cityName) {
      setError('Por favor, digite o nome de uma cidade!');
      return;  // Se o campo estiver vazio, não faz a requisição
    }

    setError('');  // Limpar mensagem de erro caso o input tenha algum valor

    const apiKey = '4a2ba0f48e7dae6a5249c3b53ee1b70d'
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

    try {
      const apiInfo = await axios.get(urlApi)
      setWeather(apiInfo.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
      setError('Não foi possível encontrar informações para essa cidade.');
    }
  }

  // Função para capturar o "Enter" no campo de texto
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      apiService()
    }
  }

  return (
    <>
      <div className='header-main' id='cont'>
        <header>
          <div className='title'>
            <h1>Where? </h1>
          </div>
          
          <div className="api-search">
            <input
              type="text"
              id="text-user"
              ref={inputRef}
              placeholder='Enter a Place:'
              onKeyPress={handleKeyPress}
            />
            <button onClick={apiService}>Enter</button>
          </div>

          {/* Mensagem de erro */}
          {error && <p className="error-message">{error}</p>}
        </header>
      </div>

      {weather && <WeatherInformation weatherInfo={weather} />}
    </>
  )
}

export default App;
