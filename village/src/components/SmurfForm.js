import React, { useState } from "react"

const emptySmurf = {
  name: "",
  age: "",
  height: ""
}

const SmurfForm = ({ addSmurf, history }) => {
  const [{ name, age, height }, setSmurf] = useState(emptySmurf)
  const handleSubmit = e => {
    e.preventDefault()
    addSmurf({ name, age: parseInt(age), height })
    setSmurf(emptySmurf)
    history.push("/")
  }
  const handleChange = ({ target: { name, value } }) => {
    setSmurf(smurf => ({ ...smurf, [name]: value }))
  }
  return (
    <>
      <h1>Add a smurf</h1>
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
