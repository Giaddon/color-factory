import React, { useState } from 'react';
import './App.css';
import ColorFactory from './ColorFactory';
import ColorPage from "./ColorPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import NewColorForm from './NewColorForm';

function App() {
  const defaultColors = [
    {name: "Dusk",
    value: "511845"},
    {name: "Burning Rose",
    value: "900c3f"},
    {name: "Umber",
    value: "ff5733"}
  ]
  
  const [colorsList, setColorsList] = useState(defaultColors);
  
  function formSubmit(newColor) {
    const modifiedColor = {...newColor, value: newColor.value.slice(1)}
    setColorsList(oldColors => [modifiedColor, ...oldColors]);
  }

  function renderColorPage(props) {
    const { colorValue } = props.match.params
    const color = colorsList.find((c, idx) => c.value === colorValue);
    if (color) return <ColorPage color={color}/>
    else return <Redirect to="/" />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <ColorFactory colorsList={colorsList} /> </Route>
        <Route exact path="/colors/new"><NewColorForm formSubmit={formSubmit}/></Route>
        <Route exact path="/colors/:colorValue" render={renderColorPage}></Route>
        <Route><Redirect to="/" /></Route>
      </ Switch>
    </BrowserRouter>
  );
}

export default App;
