import React from 'react'
import './WeatherInformation.css'

const WeatherInformation = ({weatherInfo}) => {
  console.log(weatherInfo)
  return (
    <div>
      <h2>{weatherInfo.name}</h2>
      
      <div className="imageIfo">
      <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} />     
      <p>{Math.round(weatherInfo.main.temp)}°C</p>
      </div>

      <p>{weatherInfo.weather[0].description}</p>

      <div className="others">
        <p>Thermal Sensation: {Math.round(weatherInfo.main.feels_like)}°C</p>
        <p>Humidity: {weatherInfo.main.humidity}%</p>
        <p>Pressure: {weatherInfo.main.pressure}hPa</p>
      </div>
    </div>
  )
}

export default WeatherInformation