import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class ChosenWeather extends Component {
    constructor(props) {
        super(props);
        this.validateProp = this.validateProp.bind(this);
    }


    validateProp() {
        for (var key in this.props.weather) {
            if (this.props.weather.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        console.log(this.validateProp());
        if (!this.validateProp()) {
            return (
                <div className = "weather-box">
                    <p className = "weather-box-content">City : {this.props.weather[0].name}</p>
                    <p className= "weather-box-content">Temperature : {this.props.weather[0].main.temp} °C</p>
                    <img className = "weather-box-content" src={"http://openweathermap.org/img/w/"
                        + this.props.weather[0].weather[0].icon + ".png"} />
                        
                </div>
            );
        }
        else {
            return (
                <div className = "weather-box">
                    <p className = "weather-box-content">Nothing to show.</p>
                </div>
            );
        }
    }
}

export default ChosenWeather;
