import React from 'react'

//layout for the search form
const Search = ({getSearchValue}) => {


  return (
    <fieldset className="search__field">
        <legend>Search</legend>
    <form className="search" action="search">
        <input onChange={getSearchValue} className="search__input" type="text" />
        <button className="search__button">Search</button>
    </form>
    </fieldset>
  )
}

export default Search