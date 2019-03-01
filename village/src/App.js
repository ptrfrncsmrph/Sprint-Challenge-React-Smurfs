import React, { useEffect, useState } from "react"
import axios from "axios"

import "./App.scss"
import SmurfForm from "./components/SmurfForm"
import Smurfs from "./components/Smurfs"

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios
      .get("http://10.0.0.53:3333/smurfs/")
      .then(({ data }) => setSmurfs(data))
  }, [])

  return (
    <div className="App">
      <SmurfForm />
      <Smurfs smurfs={smurfs} />
    </div>
  )
}

export default App
