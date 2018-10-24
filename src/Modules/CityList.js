import { connect } from "react-redux";
import React from "react";

const mapStateToProps = state => {
    return { cities: state.Cities };
};

const ConnectedList = ({ cities }) => (
    <div>
        <p>Cities</p>
        {console.log(cities)}
        {cities.map(obj => (
        <div key = {obj.id}>
                <p>{obj.name}
                <img src = {"http://openweathermap.org/img/w/"+obj.weather[0].icon+".png"}/>
                </p>
        </div>
        ))}
    </div>
    );


const CityList = connect(mapStateToProps)(ConnectedList);

export default CityList;