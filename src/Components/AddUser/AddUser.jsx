import React from 'react'
import { useState } from "react";

const AddUser = (props) => {
    const teamArr = props.teamArr

    const [user, setUser] = useState('')
    const [role, setRole] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const userAdd = {user, role}
        console.log(userAdd);
        teamArr.push(userAdd)

}
  return (


    <div>
        <fieldset className="newUser">
            <legend>Add New User</legend>
            <form onSubmit={handleSubmit} action="./Data/team">

                User: <input placeholder='First and Last Name' className="newUser__user" type="text"  
                value={user} onChange={(e) => setUser(e.target.value)} />
                <br/>

                Role: <input placeholder='Job Title' className="newUser__role" type="text"  
                value={role} onChange={(e) => setRole(e.target.value)} />
                <br />

                <button className="newUser__button">Add User</button>
            </form>
        </fieldset>
    </div>
  )
}

export default AddUser