import React from 'react';
import style from './card.module.css';
import CardDetail from '../CardDetail/CardDetail'
import {useDispatch} from 'react-redux';
import {deleteCity} from '../../redux/actions'
import CloseIcon from '@material-ui/icons/Close';
import {FaThermometerHalf} from  'react-icons/fa';
import moment from 'moment-timezone';
import 'moment/locale/es';

export default function Card({city}){

    const dispatch = useDispatch();
    moment.locale('es');

    const {cityWeather,details} = city

    //console.log("detalles",details.daily[0])
    let pronosticoExtendido = details.daily.slice(1,4);

    
    console.log("pronosticoExtendido",pronosticoExtendido)
    //console.log("cityDay",city.date)


    const handleClose= e =>{
        dispatch(deleteCity(city))
    }

    
    return(
        <div className={style.card}>
            
            <div className={style.cardTitle}>
            <div className={style.btn}><button className={style.btnClose} onClick={handleClose}><CloseIcon/></button></div>
                <div className={style.cityName}>{cityWeather.name}, {cityWeather.country}</div>
                <div>{moment.tz(details.current.dt * 1000, details.timezone).format('LLLL')}</div>
            </div>
            <div className={style.weather}>

                <div className={style.currentWeather}>
                    <div className={style.currentWeatherIcon}><img src={"http://openweathermap.org/img/wn/" + cityWeather.img + "@2x.png"} alt=""></img></div>
                    <div className={style.data}><FaThermometerHalf className={style.weatherIcon} />{cityWeather.temp}°</div>
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
    )
}