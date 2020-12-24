import {ADD_CITY,DELETE_CITY,CLOSE_WARNING,FAILED_REQ,LOADING} from '../constants/constants';

const initialState ={
    cities:[],
    warningModal:{
        open: false,
        message:""
    },
    loading:false
}

function stateCitiesincludes(cities,city) {
    let cityFilter= cities.filter(cityState =>cityState.cityWeather.id === city.cityWeather.id)
    if(cityFilter.length === 1){
        return true;
    }else{
        return false;
    }
}



export default function rootReducer(state = initialState,action){
    switch(action.type){
        case ADD_CITY:
            {
                let cityIncluded = stateCitiesincludes(state.cities,action.payload)
                
                return{
                    ...state,
                    cities: (cityIncluded || state.cities.length>3)? state.cities : state.cities.concat(action.payload),
                    warningModal: (cityIncluded || state.cities.length>3) ? ((state.cities.length>3)?{open:true, message: "No puedes agregar mas de 4 ciudades a la lista"}:{ open: true, message: `La ciudad ${action.payload.cityWeather.name} ya se encuentra en la lista`}) : state.warningModal
                }
            }

        case DELETE_CITY:
            {
                return{
                    ...state,
                    cities: state.cities.filter(city=>city.cityWeather.id !== action.city.cityWeather.id)
                }
            }

        case CLOSE_WARNING:
            {
            
                return{
                    ...state,
                    warningModal:  {
                        open:false,
                        message:""}
                }
            }

        case FAILED_REQ:
            {
                return{
                    ...state,
                    warningModal:  {
                        open:true,
                        message:""}
                }
            }

        case LOADING:
            {
                return{
                    ...state,
                    loading: (state.loading)? false:true
                }
            }


        
        default:
            return state;
    }
}