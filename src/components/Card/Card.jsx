import React from 'react';
import style from './card.module.css';
import CardDetail from '../CardDetail/CardDetail'
import {useDispatch} from 'react-redux';
import {deleteCity} from '../../redux/actions'
import moment from 'moment-timezone';
import 'moment/locale/es';

export default function Card({city}){

    const dispatch = useDispatch();
    moment.locale('es');

    const {cityWeather,details} = city


    let pronosticoExtendido = details.daily.slice(1,4);

    
    


    const handleClose= e =>{
        dispatch(deleteCity(city))
    }

    
    return(
        <div className={style.cardContainer}>
            <div className={style.card}>

                <div className={style.cardTitle}>
                    <div className={style.btn}><button className={style.btnClose} onClick={handleClose}><svg  height="1.5em" width="1.5em" viewBox="0 0 24 24" ><path fill="#FFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    </button></div>
                    <div className={style.cityName}>{cityWeather.name}, {cityWeather.country}</div>
                    <div>{moment.tz(details.current.dt * 1000, details.timezone).format('LLLL')}</div>
                </div>

                <div className={style.weather}>

                    <div className={style.currentWeather}>
                        <div className={style.currentWeatherIcon}><img src={"http://openweathermap.org/img/wn/" + cityWeather.img + "@2x.png"} alt=""></img></div>
                        <div className={style.data}><svg className={style.weatherIcon}  fill="currentColor"  viewBox="0 0 256 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path></svg>
                        {cityWeather.temp}°</div>
                        <div className={style.data}>Humedad: {cityWeather.humidity}%</div>
                        <div className={style.data}>{cityWeather.weather}</div>

                    </div>

                    <div className={style.dailyWeatherBox}>
                        <p className={style.daileWeatherTitle}>Pronostico Extendido</p>
                        <div className={style.dailyWeather}>
                            {pronosticoExtendido.map((day, i) => {
                                return <CardDetail
                                    date={moment.tz(day.dt * 1000, details.timezone).format("llll")}
                                    day={day}
                                    key={i}
                                />
                            }
                            )}
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}