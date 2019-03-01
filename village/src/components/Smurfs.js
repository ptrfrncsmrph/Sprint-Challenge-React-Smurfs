import React from "react"
import { Link } from "react-router-dom"

import Smurf from "./Smurf"
import "./Smurfs.scss"

const Smurfs = ({ smurfs = [] }) => (
  <>
    <h1>Smurf Village</h1>
    <Link to="/smurf-form">Add Smurf</Link>
    <ul>
      {smurfs.map(smurf => (
        <Smurf {...smurf} key={smurf.id} />
      ))}
    </ul>
  </>
)

export default Smurfs
