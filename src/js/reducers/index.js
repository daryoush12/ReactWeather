import { FETCH_CITIES, SHOW_WEATHER } from "../constants/action-types";
import axios from 'axios';
import { AxiosCallCity } from "../../RestHandlers/AxiosRest";

const initialState = {
   Cities: [],
   WeatherByCity: {}
};

//we want current weather for assigned location.
//By country: List weather for chosen country.
//By city: Show weather for certain country
//Todo - Filter city list of finland by the masscount and take 10 biggest cities available(Another API for masscount?).
//Todo - Narrow down search box of Geo to eliminate all the extra cities outside of finland.
const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_CITIES:{
            return {...state, Cities: action.payload}
        }
        case SHOW_WEATHER: {
            return {...state, WeatherByCity: state.Cities.filter(item => {
                if(item.id == action.payload.id)
                return true;
                else
                return false;
            })}
        }
        default:
            return state;
    } 
};

export default rootReducer;