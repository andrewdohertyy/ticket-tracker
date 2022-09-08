import React from 'react'
import teamArr from'../../Data/team.js'
import Ticket from '../../Components/Ticket/Ticket';
import { useState } from 'react'

const Search = () => {

    let [search, setSearch] = useState("")

  return (
    <div>
        <input type="text" />
        {teamArr.filter((value) => {
            if (search = "") {
                return value
            } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                return value
            }
        }).map((value, key) => {
            return (
                <Ticket />
            )
        })}

    </div>
  )
}

export default Search

