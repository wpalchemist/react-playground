import "./styles.css";

import React from "react";
import { useEffect, useState } from "react";
import TextField from "./TextField";

const App = () => {
  const [appState, setAppState] = useState({
    form: null
  });

  useEffect(() => {
    const apiUrl = "https://dev-mkgfdev.pantheonsite.io/wp-json/gf/v2/forms/4";
    fetch(apiUrl, {
      headers: {
        Authorization:
          "Basic Y2tfZWEyZTVlNThiNWUwMmFlNjI5M2UzZGZmOWY5MmI0MmE4MmVhMmU1ODpjc19mNzlmYTc3NDA4OWMyODQxNTRmMTM2MDc1N2U4ZDA5YmQwZGYyNGYx"
      }
    })
      .then((response) => response.json())
      .then((form) => {
        setAppState({ form: form });
      });
  }, [setAppState]);

  return (
    <div className="App">
      <h1>Fuck Around Find Out About {appState.form?.title}</h1>
      <TextField />
    </div>
  );
};

export default App;
