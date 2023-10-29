import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

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

  const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: violet; /* Change border color on hover */
    }
  `;

  return (
    <div className="cats">
      <h1>{value}</h1>
      <Button onClick={cfapi}>Show More Facts</Button>
    </div>
  );
}

export default Catfacts;
