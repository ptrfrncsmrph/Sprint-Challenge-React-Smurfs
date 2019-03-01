import React from "react"

import Smurf from "./Smurf"
import "./Smurfs.scss"

const Smurfs = ({ deleteSmurf, smurfs = [], history }) => (
  <>
    <h1>Smurf Village</h1>
    {smurfs.length ? (
      <ul>
        {smurfs.map(smurf => (
          <Smurf
            history={history}
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
