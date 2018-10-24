import React, { Component } from 'react';
import store from './js/store/index'
import logo from './logo.svg';
import './App.css';
import { AxiosCallCities } from './RestHandlers/AxiosRest';
import RealTimeWeather from './Modules/RealTimeWeather';



class Front extends Component {
  render() {
    return (
      <div>
        <RealTimeWeather/>
      </div>
    );
  }
}

export default Front;
