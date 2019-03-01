import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink, Route } from "react-router-dom"

import "./App.scss"
import SmurfForm from "./components/SmurfForm"
import Smurfs from "./components/Smurfs"

const API_ENDPOINT = "http://10.0.0.53:3333/smurfs/"

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  const update = ({ data }) => setSmurfs(data)

  useEffect(() => {
    axios.get(API_ENDPOINT).then(update)
  }, [])

  const addSmurf = smurf => {
    axios.post(API_ENDPOINT, smurf).then(update)
  }

  const deleteSmurf = id => _e => {
    axios.delete(API_ENDPOINT + String(id)).then(update)
  }

  const updateSmurf = (id, smurf) => {
    axios.put(API_ENDPOINT + String(id), smurf).then(update)
  }

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurf-form">Add a smurf</NavLink>
      </nav>
      <Route
        exact
        path="/"
        render={props => (
          <Smurfs deleteSmurf={deleteSmurf} smurfs={smurfs} {...props} />
        )}
      />
      <Route
        exact
        path="/smurf-form"
        render={props => <SmurfForm addSmurf={addSmurf} {...props} />}
      />
      <Route
        path="/smurf-form/:id"
        render={props => (
          <SmurfForm smurfs={smurfs} updateSmurf={updateSmurf} {...props} />
        )}
      />
    </>
  )
}

export default App
