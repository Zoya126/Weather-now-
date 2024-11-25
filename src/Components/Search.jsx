import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <button onClick={handleSearch} style={{ padding: "8px", marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
};

export default Search;
