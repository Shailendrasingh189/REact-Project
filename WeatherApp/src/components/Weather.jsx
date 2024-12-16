import searchIcon from "../assets/icons/search.png";
import clearIcon from "../assets/images/clear.png";
import humidityIcon from "../assets/icons/humidity.png";
import windIcon from "../assets/icons/wind.png";
import { useEffect, useRef, useState } from "react";
import allIcons from "./weatherIcon";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
    }
    try {
      const url = `${apiUrl}${city}&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      
      if(!response.ok) {
        alert(data.message);
        return;
      }
      
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clearIcon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        // icon: `https://openweathermap.org/img/wn/${data.weather[0].icon || "01d"}@2x.png`,
        icon: icon,
      });

      inputRef.current.value = "";
    } catch (error) {
      setWeatherData(false);
      console.log(error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search(inputRef.current.value);
    }
  };
  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="place-self-center px-10 py-5 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col items-center justify-center">
        <h1 className="text-3xl p-4 text-slate-100">Weather App</h1>
      <div className="flex items-center gap-2 bg-cyan-50 rounded-3xl">
        <input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className="h-10 border-none outline-none pl-5 text bg-transparent text-neutral-600"
          type="text"
          placeholder="Search"
        />
        <div
          onClick={() => search(inputRef.current.value)}
          className="h-10 w-14 px-3 py-2 rounded-3xl cursor-pointer"
        >
          <img className="w-6 h-6" src={searchIcon} alt="search" />
        </div>
      </div>
      {weatherData ? (
        <>
          <img
            src={weatherData.icon}
            alt="weather-icon"
            className="w-36 my-7"
          />
          <p className="temperature text-7xl">{weatherData.temperature}°c</p>
          <p className="location text-4xl ">{weatherData.location}</p>
          <div className="weather-data w-full mt-10 flex justify-between items-center">
            <div className="col">
              <img src={humidityIcon} className="w-1/4 h-1/4" alt="" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={windIcon} alt="" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
