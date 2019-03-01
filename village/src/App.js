import React, { useEffect, useState } from "react"
import axios from "axios"
import { Route } from "react-router-dom"

import "./App.scss"
import SmurfForm from "./components/SmurfForm"
import Smurfs from "./components/Smurfs"

const API_ENDPOINT = "http://10.0.0.53:3333/smurfs/"

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios.get(API_ENDPOINT).then(({ data }) => setSmurfs(data))
  }, [])

  const addSmurf = smurf => {
    axios.post(API_ENDPOINT, smurf).then(({ data }) => setSmurfs(data))
  }

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => <Smurfs smurfs={smurfs} {...props} />}
      />
      <Route
        path="/smurf-form"
        render={props => <SmurfForm addSmurf={addSmurf} {...props} />}
      />
    </div>
  )
}

export default App
