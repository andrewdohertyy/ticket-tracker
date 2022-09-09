import React from 'react'


//layout for the search form
const Search = () => {
  return (
    <fieldset className="search__field">
        <legend>Search</legend>
    <form className="search" action="search">
        <input className="search__input" type="text" />
        <button className="search__button">Search</button>
    </form>
    </fieldset>
  )
}

export default Search