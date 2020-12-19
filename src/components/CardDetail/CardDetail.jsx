import React from 'react'
import style from './carddetail.module.css'
import {FaThermometerHalf} from  'react-icons/fa';

export default function CardDetail(props){
    const {date,day} = props

    //console.log("adassdad",date.slice(5,2));

    return(
        <div className={style.card}>
            <div className={style.title}>{date.slice(0, 3)}  {date.substring(6, 9)}</div>
            <div className={style.icon}><img src={"http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} alt=""></img></div>
            <div className={style.temp}><FaThermometerHalf className={style.thermometer}/> {Math.round(day.temp.min)}°/{Math.round(day.temp.max)}°</div>
        </div>
    )
}