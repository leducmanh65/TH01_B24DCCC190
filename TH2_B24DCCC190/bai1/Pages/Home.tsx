import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "../components/WeatherForm";
import WeatherInfo from "../components/WeatherInfo";

const Home: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState("");

  const fetchWeather = async (cityName: string) => {
    try {
      const response = await axios.get(`https://wttr.in/${cityName}?format=j1`);
      const current = response.data.current_condition[0];
      setCity(cityName);
      setWeather({
        temperature: current.temp_C,
        description: current.weatherDesc[0].value,
      });
    } catch (error) {
      alert("Không tìm thấy thành phố này!");
    }
  };

  return (
    <div className="home">
      <h1>🌦️ Ứng dụng Thời tiết</h1>
      <WeatherForm onSearch={fetchWeather} />
      {weather && (
        <WeatherInfo
          temperature={weather.temperature}
          description={weather.description}
          city={city}
        />
      )}
    </div>
  );
};

export default Home;
