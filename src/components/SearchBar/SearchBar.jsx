import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {searchCity} from '../../redux/actions'
import style from './searchbar.module.css';
import SearchIcon from '@material-ui/icons/Search';


export default function SearchBar(){
    const [city,setCity] = useState("");

    const dispatch = useDispatch();

    const handleCity = e =>{
        setCity(e.target.value)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            dispatch(searchCity(city))
            setCity("");
        }
      }

   const handleSearch =async (e)=>{
       dispatch(searchCity(city))
       setCity("");
    }
    return(
        <div className={style.searchbar}>
            <input className={style.inpt} type="text" placeholder="Buscar ciudad" onChange={handleCity} value={city} onKeyPress={handleKeyPress} />
            <button className={style.btn} onClick={handleSearch}><SearchIcon/></button>
        </div>
    )
}