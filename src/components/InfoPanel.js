import React, { useEffect, useState } from "react";
import AllCountry from "./AllCountries";
import GlobalStats from "./GlobalStats";
import Chart from "./Chart";
export default function InfoPanel({ cureentScreen }) {
  if (cureentScreen === 0) {
    return <GlobalStats />;
  } else if(cureentScreen === 1){
    return <AllCountry />;
  }else{
      return <Chart />;
  }
}
