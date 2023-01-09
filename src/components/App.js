import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";

function App() {
const [sorted, setSorted] = useState(null);
const [greased, setGreased] = useState(false)
// //weight sorting here	


	function handleSort(e) {
	    setSorted(() => e.target.value);
	    handleSorted(sorted);
	}


function handleSorted(sortBy) {
	return hogs.sort((a, b) => {
		if(a[sortBy] < b[sortBy]) {
			return -1;
		} else {
			return 1;
		}
	})
}


function handleFilter() {
  setGreased(prev => !prev)
}



   let hogTile = hogs.filter(filteredHog => {
	if(greased) {
		return filteredHog.greased;
	} else {
		return filteredHog;
	}
   }).map(tile => {
	return <Tile key={tile.name} name={tile.name} image={tile.image} specialty={tile.specialty} weight={tile.weight} greased={tile.greased} medal={tile["highest medal achieved"]} />
})


	return (
		<div className="App">
			<Nav />
			<button onClick={handleSort} value="weight">Sort by Weight</button>
			<br></br>
			<button onClick={handleSort}value="name">Sort by Name</button>
			<br></br>
			<label htmlFor="greased">Greased: </label>
			<input type="checkbox" id="greased" onChange={handleFilter} />
			{hogTile}
		</div>
	);
}

export default App;
