import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import SetPage from "./Components/Utils/SetPage";
import Footer from "./Components/Footer";

function App() {
  const [state, setState] = useState(0);

  function handleStateChange(newState) {
    setState(newState);
  }

  let Main = SetPage(state);

  return (
    <React.Fragment>
      <Navbar changeState={handleStateChange} />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
