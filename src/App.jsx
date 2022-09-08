import Header from "./Components/Header/Header";
import Ticket from "./Components/Ticket/Ticket";
//import AddUser from "./Components/AddUser/AddUser";
import teamArr from './Data/team.js';
import Search from "./Components/Search/Search";
import { useState } from "react";
import './App.scss';


function App() { 

const [array, setArray] = useState(teamArr);

 const AddUser = () => {

    const [name, setUser] = useState('')
    const [role, setRole] = useState('')
    const id = teamArr.length + 1

    const handleSubmit = (e) => {
        e.preventDefault();

        const userAdd = {id, name, role}
        teamArr.push(userAdd)
        
        let updatedArr = [...teamArr];
        setArray(updatedArr);
}       

  return (


    <div className="newUser">
        <fieldset className="newUser__field">
            <legend>Add New User</legend>
            <form className="newUser__form" onSubmit={handleSubmit} action="./Data/team">

                Name:  
                <input placeholder='First and Last Name' className="newUser__user" type="text"  
                value={name} onChange={(e) => setUser(e.target.value)} />
                <br/>

                Role:  
                <input placeholder='Job Title' className="newUser__role" type="text"  
                value={role} onChange={(e) => setRole(e.target.value)} />
                <br />


                <button className="newUser__button">Add User</button>
            </form>
        </fieldset>
    </div>
  )
}

//maps over the teamArr and 
const ticketsJSX = teamArr.map((member) => {
  return (
    <Ticket name={member.name} role={member.role} key={member.id}/>
  )
})

  return (
    <div className="app">

      <div className="container">
          <Header className="container__header"/>
          <Search />
          <br />
        <div className="container__tickets">
          {ticketsJSX}
        </div>
        <div>
          <AddUser/>
        </div>

      </div>

    </div>
  );
}

export default App;
