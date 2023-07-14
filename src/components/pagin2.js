import React, { useEffect, useState } from "react";
import axios from "axios";
const MyComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    filterData();
  }, [data, filter]);
  const fetchData = async () => {
    try {
      const response = await axios.get("your-api-endpoint");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const filterData = () => {
    const filtered = data.filter((item) => {
      const regex = new RegExp(`^[${filter}]`, "i");
      return regex.test(item.name);
    });
    setFilteredData(filtered);
  };
  const handleLetterClick = (letter) => {
    setFilter(letter);
  };
  return (
    <div className="center">
      <div className="pagination">
        {/* Render clickable letters from A to Z */}
        {[...Array(26)].map((_, index) => {
          const letter = String.fromCharCode(65 + index);
          return (
            <a key={letter} onClick={() => handleLetterClick(letter)}>
              {letter}
            </a>
          );
        })}
      </div>
      <div className="numberdrop-down">
        {/* Render dropdown for numbers 0-9 */}
        <select
          className="custom-select"
          onChange={(e) => handleLetterClick(e.target.value)}
        >
          <option value="">0-9</option>
          {[...Array(10)].map((_, index) => {
            return (
              <option key={index} value={index}>
                {index}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {/* Render the filtered data */}
        {filteredData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
export default MyComponent;
