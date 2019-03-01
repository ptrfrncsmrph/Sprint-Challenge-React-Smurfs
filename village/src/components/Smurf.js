import React from "react"

const Smurf = ({
  deleteSmurf,
  id,
  name = "",
  height = "",
  age = "",
  history
}) => {
  const editSmurf = () => history.push(`/smurf-form/${id}`)
  return (
    <li className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button onClick={deleteSmurf(id)} className="danger">
        Delete
      </button>
      <button onClick={editSmurf}>Edit</button>
    </li>
  )
}

export default Smurf
