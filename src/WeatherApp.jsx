import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Patna",
        temp: 25.05,
        tempMin: 25,
        tempMax: 26,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze",
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);

    };

    return (
        <div style={{textAlign:"center"}}>
            <h2> Weather App </h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
