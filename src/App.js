import React, { useState } from "react";
import FootNav from "./components/FootNav";
import InfoPanel from "./components/InfoPanel";
import NavBar from "./components/NavBar";
function App() {
  const screenConfig = useState(0);

  return (
    <div>
      <NavBar />
      <InfoPanel cureentScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
