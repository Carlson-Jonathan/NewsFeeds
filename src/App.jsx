import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import SetPage from "./Components/SetPage";
import Footer from "./Components/Footer";

// You can also use "import * as Object from ./Components/main" to get everything
// from that class as an object. To use, simply call "Object.functionName". This is
// generally not good practice though.

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

/******************************************************************************
 * Note on how to pass states between components:
 *  1.) Set your "useState" variable - const [state, setState] = useState(0).
 *  2.) Make a container function for the setState function.
 *  3.) Pass the container as a prop to the component changing the state.
 *  4.) From the component, call the function "props.changeState(#)"
 * While you could just pass the "setState" as a prop, it is generally good
 * practice to create a container function so you can include other thing later.
 ******************************************************************************/
