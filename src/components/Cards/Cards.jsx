import React from 'react';
import Loader from '../Loader/Loader';
import {useSelector} from "react-redux";
import Card from '../Card/Card';
import style from './cards.module.css';

export default function Cards(){

    const cities = useSelector(state=>state.cities)
    
    return(
        <div className={style.container}>
            <Loader/>
            <div className={style.cardContainer}>
                
                {

                    cities ? cities.map((city, index) => <Card city={city} key={index} />):<div></div>  
                }
            </div>

        </div>
    )
}