import axios from "axios";
import React, { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${API_URL}`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>
    <h1>
      User name is {data.name}
    </h1>
  </div>;
}

export default App;
