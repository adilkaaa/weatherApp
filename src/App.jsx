import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Axios from 'axios'
import { Weather } from './components/Weather';

function App() {
  const WeatherAPI = '886705b4c1182eb1c69f28eb8c520e20';
  const [cityName, setCityName] = useState('initial');
  const [weatherData, setWeatherdata] = useState({});
  const getWeatherData = (city) =>{
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherAPI}&units=metric`).then((response)=>
    {
      console.log(response.data)
      setWeatherdata(response.data);
    }
  ).catch((e)=>{
    console.log('Try write correct City')
    setWeatherdata(false)

  })
  }
  const handleSubmit = (e) =>{
    if (e.key == 'Enter') {
      setCityName(e.target.value);
    }
  }
  useEffect(()=>{
    console.log('useEffect worked');

    cityName!= 'initial' && getWeatherData(cityName);
  },[cityName]);
  const weatherDescription = weatherData.weather ? weatherData.weather[0] : [];


  return (
    <div className="App">
      

      <Weather handleSubmit={handleSubmit} weatherData={weatherData} weatherDescription={weatherDescription}/>
     {/* <h2>Weather App</h2>
     <div>
      <input placeholder='city' onKeyDown={handleSubmit}/>
      <div className='weather-data'>
        {weatherData  ?
        <div className='weather-box'>

        <h3 id='city'>{weatherData?.name}</h3>
        <h3 id='description'>{weatherDescription?.description}</h3>
        <h4 className='degrees'>{weatherData?.main?.feels_like} &#8451;</h4>
        <p>Humidity: {weatherData?.main?.humidity}</p>
        <p>Speed: {weatherData?.wind?.speed} m/s</p>


        
        </div>: <h2>Not found!</h2>}
      </div>
      
     </div> */}
    </div>
  )
}

export default App
