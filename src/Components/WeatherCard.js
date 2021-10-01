import { useEffect, useState } from 'react';
import { IconsList } from '../Assets/IconsList';
import '../Styles/WeatherCard.css';

const week_days=["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const obj_default={"coord":{"lon":9,"lat":34},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":27.89,"feels_like":29.18,"temp_min":27.89,"temp_max":27.89,"pressure":1021,"humidity":59,"sea_level":1021,"grnd_level":1018},"visibility":10000,"wind":{"speed":5.6,"deg":77,"gust":8.41},"clouds":{"all":0},"dt":1632948482,"sys":{"type":1,"id":1197,"country":"TN","sunrise":1632892615,"sunset":1632935494},"timezone":3600,"id":2464461,"name":"Tunisia","cod":200};
const city_regex=/^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/;

function WeatherCard(){

    const [city,setCity]=useState("Tunis");
    const [weather,setWeather]=useState(obj_default);
    const [fetchDate,setFetchDate]=useState(new Date());

    function CitySelectionHandler(){
        let cityName=document.querySelector(".City-name-input").value;
        if(city_regex.test(cityName)){setCity(cityName);}
        else{alert("Please enter a valid city name 😅")}
    }

    function getWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4e2cada6aa289a907d716cec2d5c3df&units=metric`)
        .then(predata=>predata.json())
        .then(data=>setWeather(data));
        setFetchDate(new Date());
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    useEffect(()=>{getWeather()},[city]);

return(
    <div className="WeatherCard">
        <div className="City-name">
            <input className="City-name-input" spellcheck='false' autocorrect='off' placeholder="Tunis"></input>
            <button className="City-name-button" onClick={CitySelectionHandler}>
                <i class="fas fa-search-location"></i>
            </button>
        </div>
        <div className="Weather-infos">
            <h2 className="Info-temp">🌡{weather.main.temp} °C</h2>
            <h3 className="Info-feels-like">Feels like: {weather.main.feels_like} °C</h3>
            <h3 className="Info-description">{weather.weather[0].description}</h3>
            <h3 className="Info-description">{capitalizeFirstLetter(city) }</h3>
            <h3 className="Info-fetch-time">{week_days[fetchDate.getDay()]}, {fetchDate.getHours()}:{fetchDate.getMinutes()}</h3>
            <div className="More-info">
                <h3 className="More-info-humidity-wind">💨Wind: {weather.wind.speed}km/hr | 💧Humidity: {weather.main.humidity}%</h3>
                <button className="Refresh-weather-info" onClick={getWeather}>Refresh </button>
            </div>
        </div>
        <div className="Weather-icon">
        <img className="Icon-img" src={IconsList.find(icon=>icon.discription===weather.weather[0].main).icon} alt=""></img>
        </div>
    </div>
);
}

export default WeatherCard;