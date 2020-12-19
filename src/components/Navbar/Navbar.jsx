import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import style from './navbar.module.css';

export default function Navbar(){
    return(
        <div className={style.navBar}>
            <div className={style.searchBar}>
            <SearchBar/>
            </div>
        </div>
    )
}