import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({ formSubmit }) {
  const [formData, setFormData] = useState({name: "", value: "#000000"});
  const history = useHistory();

  function onSubmit(evt){
    evt.preventDefault();

    console.log("Submitting form")
    formSubmit(formData);
    history.push("/");
  }

  function controlForm(evt) {
    const {name, value} = evt.target;

    setFormData(oldData => ({...oldData, [name]:value}));
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name your color:
        <input name="name" onChange={controlForm} type="text" value={formData.name}></input>
      </label>
      <label>Select your color:
        <input name="value" onChange={controlForm} type="color" value={formData.value}></input>
      </label>
      <button type="submit">Create your color.</button>
    </form>
  )
}

export default NewColorForm;