import { FETCH_CITIES, SHOW_WEATHER } from "../constants/action-types";


//Core Weather Fetch actions:
export const fetchCities = cities =>({type: FETCH_CITIES, payload: cities})

//Weather actions:
//Chow fetched weather:
export const ShowChosenWeather = marker => ({type: SHOW_WEATHER, payload: marker})
//Set weather:
//export const SetWeather = marker => ({type: SET_WEATHER, payload: marker})