import React from "react";

function DisplayNumbers(props) {
  props.i++;
  return (
    <React.Fragment>
      <li>{props.i}</li>
    </React.Fragment>
  );
}

export default DisplayNumbers;
