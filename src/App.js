import "./App.css";
import { useEffect, useState } from "react";

const axios = require("axios").default;

function App() {
  const [data, setData] = useState("");
  // const [refreshAdvice, setRefreshAdvice] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((resp) => setData(resp.data.slip));
  }

  return (
    <div className="App">
      <div className="adviceBox">
        <div className="adviceID">ADVICE #{data.id}</div>
        <div className="adviceText">"{data.advice}"</div>
        <button onClick={fetchData}>Dice</button>
      </div>
    </div>
  );
}

export default App;
