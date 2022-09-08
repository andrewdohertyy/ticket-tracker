// import React from 'react'
// import { useState } from "react";
// import teamArr from '../../Data/team.js';

// const AddUser = () => {
//    console.log(teamArr);
//     const [name, setUser] = useState('')
//     const [role, setRole] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userAdd = {name, role}
//         console.log(userAdd);
//         teamArr.push(userAdd)
//         console.log(teamArr);

// const clearButton = () => {
//   input.value = '';
// }

// }
//   return (


//     <div>
//         <fieldset className="newUser">
//             <legend>Add New User</legend>
//             <form onSubmit={handleSubmit} action="./Data/team">

//                 Name: <input placeholder='First and Last Name' className="newUser__user" type="text"  
//                 value={name} onChange={(e) => setUser(e.target.value)} />
//                 <br/>

//                 Role: <input placeholder='Job Title' className="newUser__role" type="text"  
//                 value={role} onChange={(e) => setRole(e.target.value)} />
//                 <br />


//                 <button className="newUser__button">Add User</button>
//             </form>
//             <button onClick={clearButton()}>Update</button>
//         </fieldset>
//     </div>
//   )
// }

// export default AddUser