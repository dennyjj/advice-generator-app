import { useEffect, useState } from "react";

const axios = require("axios").default;

export function AdviceBox() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const slip = (
      await axios.get(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      )
    ).data.slip;

    console.log(slip);
    setData(slip);
  };

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
