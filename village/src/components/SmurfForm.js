import React, { useEffect, useState } from "react"

const emptySmurf = {
  name: "",
  age: "",
  height: ""
}

const SmurfForm = ({ smurfs = [], updateSmurf, addSmurf, history, match }) => {
  const { id } = match.params
  const [{ name, age, height }, setSmurf] = useState(emptySmurf)

  useEffect(
    () => {
      const smurf = id ? smurfs.find(s => s.id === id) : emptySmurf
      smurf && setSmurf(smurf)
    },
    [smurfs]
  )

  const handleSubmit = e => {
    e.preventDefault()
    id !== undefined
      ? updateSmurf(id, { name, age: parseInt(age), height })
      : addSmurf({ name, age: parseInt(age), height })
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
