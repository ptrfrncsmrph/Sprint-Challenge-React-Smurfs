import React, { useEffect, useState } from "react"
import axios from "axios"

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
      <SmurfForm addSmurf={addSmurf} />
      <Smurfs smurfs={smurfs} />
    </div>
  )
}

export default App
