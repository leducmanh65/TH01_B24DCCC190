import React from "react";

interface WeatherInfoProps {
  temperature: string;
  description: string;
  city: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ temperature, description, city }) => {
  return (
    <div className="weather-info">
      <h2>Thời tiết tại {city}</h2>
      <p>Nhiệt độ: {temperature}°C</p>
      <p>Tình trạng: {description}</p>
    </div>
  );
};

export default WeatherInfo;
