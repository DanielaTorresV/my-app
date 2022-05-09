import React from "react";
import './App.css';
import Title from "./components/Title.js";
import Subtitle from "./components/Subtitle.js";
import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
     <Title title="Está es mi primera interacción con React"/>
     <Subtitle text="Esté es el subtítulo para mi primera interacción con React"/>
     <Button text="Mi 1er Botón en React"/>
    </div>
  );
};

export default App;
