import React from 'react'
import Counter from "../../Components/Counter/Counter";

const Ticket = (props) => {

  const { name, role } = props;

  return (
    <div>
        <h2>{name}</h2>
        <h2>{role}</h2>
        <div><Counter /></div>
      </div>
    )
  }
 

export default Ticket