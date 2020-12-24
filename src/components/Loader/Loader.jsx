import React from 'react'
import ReactDom from 'react-dom'
import {useSelector} from 'react-redux'
import './loader.css'


 export default function Loader(){

    const loading = useSelector(state=>state.loading)
    if(!loading) return null

    return ReactDom.createPortal(<div className="loaderContainer">

        <div className="loader">

        </div>

        </div>,document.getElementById("loader"))
}