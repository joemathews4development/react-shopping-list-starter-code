import { useState } from "react"

function SearchBar({searchValue, setSearchValue}) {

  

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" value={searchValue} onChange={handleSearchInputChange}/>

    </div>
  )
}

export default SearchBar