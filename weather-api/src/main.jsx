import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherInformation from './components/weather-info/WeatherInformation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WeatherInformation />
  </StrictMode>,
)
