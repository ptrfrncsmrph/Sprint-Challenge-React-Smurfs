import React from "react"

const noOp = _ => console.error("Forgot to implement")

const Smurf = ({
  deleteSmurf = noOp,
  id = undefined,
  name = "",
  height = "",
  age = ""
}) => (
  <li className="Smurf">
    <h3>{name}</h3>
    <strong>{height} tall</strong>
    <p>{age} smurf years old</p>
    <button onClick={deleteSmurf(id)} className="danger">
      Delete
    </button>
  </li>
)

export default Smurf
