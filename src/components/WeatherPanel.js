import React, {useState} from "react";
import Form from './Form';
import Card from "./Card";

const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=04ad7cd713ab7a343b521cc29e306b6d&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=04ad7cd713ab7a343b521cc29e306b6d&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        // weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((Response) => {
            if(!Response.ok) throw {Response}
            return Response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch (error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((Response) => {
            if(!Response.ok) throw {Response}
            return Response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch (error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return(

        <React.Fragment>

            <Form
                newLocation = {getLocation}
            />

            <Card 
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />


        </React.Fragment>

    );

}

export default WeatherPanel;