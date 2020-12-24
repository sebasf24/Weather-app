import React from 'react'
import style from './carddetail.module.css'


export default function CardDetail(props){
    const {date,day} = props

    //console.log("adassdad",date.slice(5,2));

    return(
        <div className={style.card}>
            <div className={style.title}>{date.slice(0, 3)}  {date.substring(6, 9)}</div>
            <div className={style.icon}><img src={"http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} alt="" width="80px" height="80px"></img></div>
            <div className={style.temp}><svg className={style.thermometer}  fill="currentColor"  viewBox="0 0 256 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path></svg>
             {Math.round(day.temp.min)}°/{Math.round(day.temp.max)}°</div>
        </div>
    )
}