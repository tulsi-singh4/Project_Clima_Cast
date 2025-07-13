import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import snowy from "../src/assets/snowy.jpg";
import foggy from "../src/assets/foggy.jpg";
import summer from "../src/assets/summer_season.jpg";
import rainy from "../src/assets/rainy_season.jpeg";
import "./InfoBox.css";

export default function InfoBox({ info }){
    return (
        <div className="InfoBox">
             <div className="cardContainer">
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={info.temp < 10 ? snowy : info.humidity > 80 ? rainy : info.temp < 25 ? foggy : summer}
                            alt="weather"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <p>Temperature = {info.temp}&deg;C </p>
                             <p>Humidity = {info.humidity}%</p>
                             <p>Min Temp = {info.tempMin}&deg;C</p>
                             <p>Max Temp ={info.tempMax} &deg;C</p>
                             <p>Weather: <i>{info.weather}</i></p>
                             <p>Feels Like = {info.feelsLike}&deg;C </p>
                            </Typography>
                        </CardContent>
                        </Card>
                 </div>
        </div>
    )
}

                            // <p>Temperature = tuksi isnh &deg;C </p>
                            // <p>Humidity = </p>
                            // <p>Min Temp = &deg;C</p>
                            // <p>Max Temp = &deg;C</p>
                            // <p>Weather: <i></i></p>
                            // <p>Feels Like = &deg;C </p>