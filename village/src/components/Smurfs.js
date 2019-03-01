import React from "react"

import Smurf from "./Smurf"

const Smurfs = ({ smurfs = [] }) => (
  <div className="Smurfs">
    <h1>Smurf Village</h1>
    <ul>
      {smurfs.map(smurf => (
        <Smurf {...smurf} key={smurf.id} />
      ))}
    </ul>
  </div>
)

export default Smurfs
