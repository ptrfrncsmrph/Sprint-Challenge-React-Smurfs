import React, { useState } from "react"
import { Link } from "react-router-dom"

const SmurfForm = ({ addSmurf }) => {
  const [{ name, age, height }, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  })
  const handleSubmit = e => {
    e.preventDefault()
    addSmurf({ name, age: parseInt(age), height })
  }
  const handleChange = ({ target: { name, value } }) => {
    setSmurf(smurf => ({ ...smurf, [name]: value }))
  }
  return (
    <>
      <h1>Add a smurf</h1>
      <Link to="/">Back to Smurfs list</Link>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <input
          onChange={handleChange}
          placeholder="age"
          value={age}
          name="age"
        />
        <input
          onChange={handleChange}
          placeholder="height"
          value={height}
          name="height"
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default SmurfForm
