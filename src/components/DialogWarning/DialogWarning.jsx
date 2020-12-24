import React from 'react';
import ReactDom from 'react-dom';
import './dialogwarning.css';
import {useSelector,useDispatch} from 'react-redux'
import { CSSTransition } from "react-transition-group";
import {closeWarningModal} from '../../redux/actions'



export default function DialogWarning(){
    const dispatch = useDispatch();

    const warningModal = useSelector(state=>state.warningModal);

    const handleClose= e =>{
       dispatch(closeWarningModal())
    }


    if(!warningModal.open){
        return null
    }

    return ReactDom.createPortal(
        <div className="modalroot" tabIndex="-1" role="dialog">
            <CSSTransition
            appear
            in
            classNames="modalTransition"
            unmountOnExit
            timeout={300}

          >
            <div className="modalDialog" role="document">
                <div className="warningBox">
                    <div className="btn"><button className="btnClose" onClick={handleClose}>
                    <svg  height="1.5em" width="1.5em" viewBox="0 0 24 24" ><path fill="#FFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </button></div>
                    <div className="exclamation"><svg className="exclamationIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path fill="#eb9447" d="m256 422c-24.853 0-45 20.147-45 45s20.147 45 45 45 45-20.147 45-45-20.147-45-45-45z" /><path fill="#eb9447" d="m256 0c-24.853 0-45 20.147-45 45v299c0 24.853 20.147 45 45 45s45-20.147 45-45v-299c0-24.853-20.147-45-45-45z" /></g></svg></div>
                    <h1>{warningModal.message? warningModal.message:"La ciudad ingresada no existe"}</h1>

                </div>
            </div>
            </CSSTransition>
        </div>
    ,document.getElementById('modalroot'))
}