import React from "react";

const Display = ({ weatherData }) => {
  if (!weatherData) {
    return <p style={{ textAlign: "center", color: "black" }}>Instant weather check!!</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px",color:"black" }}>
      <h2>Weather in {weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Wind Speed: {weatherData.windspeed} km/h</p>
    </div>
  );
};

export default Display;
