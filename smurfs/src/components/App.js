import React, { useState, useEffect } from "react";
import axios from 'axios';
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";
import { SmurfContext } from '../contexts/SmurfContext';

import "./App.css";

const App = () => {
  const [ smurfs, setSmurfs ] = useState();

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        setSmurfs(response.data)
        // console.log('From useEffect',response.data);
      })
      .catch(error => console.log("Smurf Data was not returned", error));
  }, []);

  const addSmurfs = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {})
      .catch(error => console.log(error))
  }

  const deleteSmurf = smurfId => {
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        setSmurfs(response.data)
      })
      .catch(error => console.log("Error in deletSmurf Variable", error))
  }

    return (
      <SmurfContext.Provider value={{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}>
        <div className="App">
          <h1>Smurf App</h1>
          <SmurfsForm />
          <SmurfsList />
        </div>
      </SmurfContext.Provider>
    );
}

export default App;
