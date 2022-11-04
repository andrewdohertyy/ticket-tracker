import React from 'react'
import Counter from "../../components/Counter/Counter";


//ticket layout with props from App.jsx
const Ticket = (props) => {

  const { name, role } = props;

  return (
    <div className='tickets'>
        <h3 className='tickets__name'>{name}</h3>
        <h4 className='tickets__role'>{role}</h4>
        <div className='tickets__counter' ><Counter /></div>
      </div>
    )
  }
 

export default Ticket