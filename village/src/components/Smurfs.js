import React from "react"

import Smurf from "./Smurf"
import "./Smurfs.scss"

const Smurfs = ({ updateSmurf, deleteSmurf, smurfs = [] }) => (
  <>
    <h1>Smurf Village</h1>
    {smurfs.length ? (
      <ul>
        {smurfs.map(smurf => (
          <Smurf
            updateSmurf={updateSmurf}
            deleteSmurf={deleteSmurf}
            {...smurf}
            key={smurf.id}
          />
        ))}
      </ul>
    ) : (
      <p>Nothing to show</p>
    )}
  </>
)

export default Smurfs
