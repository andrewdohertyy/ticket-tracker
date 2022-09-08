import React from 'react'

const Search = () => {
  return (
    <fieldset className="search__field">
        <legend>Search</legend>
    <form className="search" action="search">
        <input placeholder='Search' className="search__input" type="text" />
        <button className="search__button">Search</button>
    </form>
    </fieldset>
  )
}

export default Search