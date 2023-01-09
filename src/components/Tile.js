import React, { useState } from 'react'

function Tile({ name, image, specialty, weight, greased, medal }) {
  const [change, setChange] = useState(false)

	function handleChange() {
		setChange(prevState => !prevState)
	}


  function isGreased() {
    if(greased) {
      return `Greased Hog`
    } else {
      return `Non-greased Hog`
    }
  }

 
  
  let toggle = !change ? <img onClick={handleChange} src={image} alt="pigs" /> : 
    <p onClick={handleChange}>{`${specialty} | ${weight} | ${isGreased()} | ${medal}`}</p>

  return (
    <div>
        <h2>{name}</h2>
        <br></br>
        {toggle}
        <br></br>
    </div>
  )
}

export default Tile