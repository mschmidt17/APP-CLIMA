import React from "react";
import "./Ciudad.css";

export default function Ciudad({city}) {
    return (
        <div className="ms">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div className="dato">Temperatura: {city.temp} ºC</div>
                        <div className="dato">Clima: {city.weather}</div>
                        <div className="dato">Viento: {city.wind} km/h</div>
                        <div className="dato">Cantidad de nubes: {city.clouds}</div>
                        <div className="dato">Latitud: {city.latitud}º</div>
                        <div className="dato">Longitud: {city.longitud}º</div>
                    </div>
        </div>
    )
}