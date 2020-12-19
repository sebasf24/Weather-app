import axios from 'axios';
import {ADD_CITY,DELETE_CITY} from '../constants/constants'

export function searchCity(city){

    const apiKey = '39c445c6e6887be90682a3d469114d07';
    return function (dispatch) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${apiKey}&units=metric`)
        .then(response=>{
            let data=response.data;
            console.log(data);
            let cityWeather={};
            if(data.main !== undefined){
              
                 cityWeather = {
                  min: Math.round(data.main.temp_min),
                  max: Math.round(data.main.temp_max),
                  img: data.weather[0].icon,
                  id: data.id,
                  wind: data.wind.speed,
                  temp: Math.round(data.main.temp),
                  name: data.name,
                  weather: data.weather[0].description,
                  country: data.sys.country,
                  clouds: data.clouds.all,
                  latitud: data.coord.lat,
                  longitud: data.coord.lon,
                  dt: data.dt,
                  timezone: data.timezone,
                  humidity: data.main.humidity
                };
              } 

          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityWeather.latitud}&lon=${cityWeather.longitud}&lang=sp&exclude=minutely&appid=0942993d27025a20ba51ad6d7cf09141&units=metric`;
          axios.get(url)
            .then(responseDetails => {
              let details = responseDetails.data;
              let cityObj ={
                cityWeather,
                details
              }
              dispatch({type: ADD_CITY, payload: cityObj})
            }
            )
            
        })
        .catch(error=>{
            alert("Ciudad no encontrada")
        })
    }

}
/* 
export function getDetails(latitud,longitud) {

  return function (dispatch) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&lang=sp&exclude=minutely&appid=0942993d27025a20ba51ad6d7cf09141&units=metric`;
    axios.get(url)
    .then(response=> {
      dispatch({type: GET_DETAILS,payload: response.data})
    }
      )
  }
} */


export function deleteCity(city) {
  return {type: DELETE_CITY, city}
  
}