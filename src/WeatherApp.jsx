import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Shillong",
        temp: 19.75,
        tempMin: 19.6,
        tempMax: 21,
        humidity: 91,
        feelsLike: 20.37,
        weather: "light rain",
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);

    };

    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{color: "brown"}}> Weather At a Glance! </h1>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
