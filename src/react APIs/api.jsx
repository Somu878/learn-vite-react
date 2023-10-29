import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'
function Catfacts() {
  const [value, setValue] = useState("Loading.....");

  function cfapi() {
    axios
      .get("https://catfact.ninja/fact?")
      .then((res) => {
        setValue(res.data.fact);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div >
      <h1>{value}</h1>
      <button  onClick={cfapi}>Show More Facts</button>
    </div>
  );
}

export default Catfacts;
