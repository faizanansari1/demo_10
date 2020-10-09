import React, { useEffect, useState } from "react";

export default function Chart() {
  const [countryData, setCounteryData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      setCounteryData(Object.values(Object.values(data.countryitems[0])));
      console.log("Charts Section: ",data.countryitems[0]["1"])
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Chart </h1>
    </div>
  );
}
