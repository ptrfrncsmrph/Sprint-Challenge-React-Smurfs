import React from "react"

import Smurf from "./Smurf"
import "./Smurfs.scss"

const Smurfs = ({ deleteSmurf, smurfs = [] }) => (
  <>
    <h1>Smurf Village</h1>
    <ul>
      {smurfs.map(smurf => (
        <Smurf deleteSmurf={deleteSmurf} {...smurf} key={smurf.id} />
      ))}
    </ul>
  </>
)

export default Smurfs
