// import "./App.css";
import image from "./assets/img.jpg";
import WeatherApp from "./WeatherApp";

function App() {
  const appStyle = {
    backgroundImage: `url(${image})`,
  };
  
  return (
    <div style={appStyle}>
      <WeatherApp />  
      
    </div>
  );
}

export default App;
