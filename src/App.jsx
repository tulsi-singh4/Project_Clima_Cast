// import "./App.css";
import image from "./assets/img.jpg";
import WeatherApp from "./WeatherApp";

function App() {
  const appStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    margin: 0,
    padding: 0,
  };
  
  return (
    <div style={appStyle}>
      <WeatherApp />  
      
    </div>
  );
}

export default App;
