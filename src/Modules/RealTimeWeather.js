import { connect } from "react-redux";
import React from "react";
import Weather from "../Components/Weather";
import ChosenWeather from '../Components/ChosenWeather';

const mapStateToProps = state => {
    var _Marks = [];
    state.Cities.map(obj => {
        _Marks.push({
            markerOffset: 0,
            name: obj.name,
            coordinates: [obj.coord.Lon, obj.coord.Lat],
            id: obj.id
        });
    })
    return { markers: _Marks, Weatherbycity: state.WeatherByCity };
};

const ConnectedList = ({ markers, Weatherbycity }) => (
    <div>
        <ChosenWeather weather = {Weatherbycity} />
        <Weather markers={markers} />
    </div>
);


const RealTimeWeather = connect(mapStateToProps)(ConnectedList);
export default RealTimeWeather;