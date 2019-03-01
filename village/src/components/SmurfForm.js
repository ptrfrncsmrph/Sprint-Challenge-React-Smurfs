import React, { useState } from "react"

const SmurfForm = () => {
  const [{ name, age, height }, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  })
  const handleSubmit = () => {}
  const handleChange = ({ target: { name, value } }) => {
    setSmurf(smurf => ({ ...smurf, [name]: value }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="name"
        value={name}
        name="name"
      />
      <input onChange={handleChange} placeholder="age" value={age} name="age" />
      <input
        onChange={handleChange}
        placeholder="height"
        value={height}
        name="height"
      />
    </form>
  )
}

export default SmurfForm
