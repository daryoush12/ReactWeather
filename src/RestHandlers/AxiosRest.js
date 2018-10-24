import axios from 'axios';
import store from '../js/store/index'
import {fetchCities,ShowChosenWeather} from '../js/actions/index'

//Rest connection details:
export const AxiosDetails = {
    appid: "ad9ede63bba0d8bd565f5ed33c0842be",
    url: "https://api.openweathermap.org/data/2.5/"
}

//rest calls:

export const AxiosCallCities = () => {

    console.log("URL: "+ AxiosDetails.url+"city?bbox=18,60,36,69,0&APPID="+AxiosDetails.appid);
    axios.get(AxiosDetails.url+"box/city?bbox=24,60,30,70,10&APPID="+AxiosDetails.appid)
    .then((response)  => {
      console.log(response.data);
      //dispatch data into redux store:
      store.dispatch(fetchCities(response.data.list));  
    })
    .catch((error) => {
      console.log(error);
    });
}

export const AxiosCallCity = (id) => {
  axios.get(AxiosDetails.url+"weather?id="+id+"&APPID="+AxiosDetails.appid)
  .then((response) => {
    console.log(response);
    let ob = {};
    ob = response;
    return ob;
   // store.dispatch(SetWeather(response.data));
  })
  .catch((error) => {
    console.log(error);
    return null;
  });
}