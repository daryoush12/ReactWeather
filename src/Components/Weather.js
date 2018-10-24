import React, { Component } from 'react';
import logo from '../logo.svg';
import store from '../js/store/index'
import {ShowChosenWeather} from '../js/actions/index';
import '../App.css';
import GeoM from './static/world-50m.json'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { AxiosCallCity } from '../RestHandlers/AxiosRest';
const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const include = [
  "FIN"
]

class Weather extends Component {

  constructor(props) {
    super(props);
    this.ShowWeather = this.ShowWeather.bind(this);
    this.HideWeather = this.HideWeather.bind(this);
  }

  ShowWeather = (marker, evt, geography) => {
      console.log("Click "+marker.name);
     // AxiosCallCity(marker.id);
      store.dispatch(ShowChosenWeather(marker));
    }
  

  HideWeather(){

  }

  render() {
    return (
      <div>
        <ComposableMap
          projectionConfig={{ scale: 4000 }}
          width={2000}
          height={1800}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup center={[20, 60]} disablePanning>
            <Geographies geography={GeoM}>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.id) !== -1 && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                          hover: {
                             fill: "#ECEFF1",
                             stroke: "#607D8B",
                             strokeWidth: 0.75,
                             outline: "none",
                           },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
                )
              }
            </Geographies>
            <Markers>
              {this.props.markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  onMouseMove={this.ShowWeather}
                  onMouseLeave={this.HideWeather}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#FF5722" },
                  }}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={10}
                    style={{
                      stroke: "#FF5722",
                      strokeWidth: 1,
                      opacity: 0.9,
                    }}      
                  />
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#607D8B",
                    }}
                  >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default Weather;