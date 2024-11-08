import React, { useEffect, useState } from 'react'
import "./news.css"
import axios from 'axios';
import { toast } from 'react-toastify';
const Weather = ({latitude, longitude}) => {
const [weatherData, setWeatherData]=useState();
const [city, setCity]=useState();
  const apiKey = 'AIzaSyAC0C7gAdgW_ZUi_Z_IIcx8DR3-3VPE-hY'; //google maps api key


  // getting weather
    useEffect(()=>{ 
      if(latitude&&longitude){
 

      const fetchData=async()=>{try {
        
const response= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=b7528c0e35ac8a936e490f35f071c3f7&units=metric`);
// response.json()

console.log("Weather response",response );
setCity(response.data.city);
const filteredForecast = response.data.list.filter((item, index) => index % 10 === 0 && index < 40);

setWeatherData(filteredForecast)
} catch (error) {
console.log(error , "back err");
}}
fetchData();}
else
toast.error("Enter location");
    },[])
   const getMyLocation=async()=>{
try {
  
} catch (error) {
  console.log(("Location error:",error));
}
   }
   useEffect(()=>{
    getMyLocation()
   }, [latitude, longitude]);
   
   const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div>
       {/* {weatherData && (
        <div>
          <h2>5-Day Weather Forecast</h2>
          <ul>
            {weatherData.map((item, index) => (
              <li key={index}>
                Date: {formatDate(item.dt )} - Temperature: {item.main.temp}°C - 
                Main: {item.weather[0].main} - Description: {item.weather[0].description} - 
                Icon: <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon" />
              </li>
            ))}
          </ul>
        </div>
      )} */}
        <div className="container">
 {weatherData &&( <div className="row">
 {/* <h2 className=''>4-Days Weather Forecast</h2> */}
 {weatherData.map((item, index) => (  <div className="col">
      <div className="weather-card one">
        <div className="top">
          <div className="wrapper">
            <div className="mynav">
            </div>
            <h1 className="heading text-uppercase ">{item.weather[0].description}</h1>
            <h3 className="location">{city.name},{city.country} </h3>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} style={{
              width:"100px"
            }} alt="Weather Icon" />
            <p className="temp">
              <span className="temp-value">{item.main.temp}</span>
              <span className="deg">0</span>
              <a href="javascript:;">
                <span className="temp-type">C</span>
              </a>
            </p>

          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <ul className="forecast">
              <a href="javascript:;">
                <span className="lnr lnr-chevron-up go-up" />
              </a>
              <li className="active">
                <span className="date">{formatDate(item.dt )}</span>
              </li>
              {/* <li>
                <span className="date">Tomorrow</span>
                <span className="lnr lnr-cloud condition">
                  <span className="temp">
                    21<span className="deg">0</span>
                    <span className="temp-type">C</span>
                  </span>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>))}
    {/* <div className="col">
      <div className="weather-card rain">
        <div className="top">
          <div className="wrapper">
            <div className="mynav">
              <a href="javascript:;">
                <span className="lnr lnr-chevron-left" />
              </a>
              <a href="javascript:;">
                <span className="lnr lnr-cog" />
              </a>
            </div>
            <h1 className="heading">Rainy day</h1>
            <h3 className="location">Sylhet, Bangladesh</h3>
            <p className="temp">
              <span className="temp-value">16</span>
              <span className="deg">0</span>
              <a href="javascript:;">
                <span className="temp-type">C</span>
              </a>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <ul className="forecast">
              <a href="javascript:;">
                <span className="lnr lnr-chevron-up go-up" />
              </a>
              <li className="active">
                <span className="date">Yesterday</span>
                <span className="lnr lnr-sun condition">
                  <span className="temp">
                    22<span className="deg">0</span>
                    <span className="temp-type">C</span>
                  </span>
                </span>
              </li>
              <li>
                <span className="date">Tomorrow</span>
                <span className="lnr lnr-cloud condition">
                  <span className="temp">
                    18<span className="deg">0</span>
                    <span className="temp-type">C</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
  </div>)}
</div>

    </div>
  )
}

export default Weather