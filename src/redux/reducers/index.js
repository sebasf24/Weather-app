import {ADD_CITY,DELETE_CITY} from '../constants/constants';

const initialState ={
    cities:[]
}

export default function rootReducer(state = initialState,action){
    switch(action.type){
        case ADD_CITY:
            {
                return{
                    ...state,
                    cities: state.cities.concat(action.payload)
                }
            }

        case DELETE_CITY:
            {
                return{
                    ...state,
                    cities: state.cities.filter(city=>city.cityWeather.id !== action.city.cityWeather.id)
                }
            }

        
        default:
            return state;
    }
}