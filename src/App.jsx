import Header from "./Components/Header/Header";
import Ticket from "./Components/Ticket/Ticket";
import AddUser from "./Components/AddUser/AddUser";
import teamArr from './Data/team.js';
import Search from "./Components/Search/Search";
import { useState } from "react";
import './App.scss';



//place to store the functions the app will need
function App() { 

const [array, setArray] = useState(teamArr);
const [name, setUser] = useState('')
const [role, setRole] = useState('')


//adds new users with the form below
const handleSubmit = (e) => {
  e.preventDefault();
  const id = teamArr.length + 1
  const userAdd = {id, name, role}
  teamArr.push(userAdd)
  let updatedArr = [...teamArr];
  setArray(updatedArr);
}

  const setUserName = (e) => {
    setUser(e.target.value)
  }
  const setUserRole = (e) => {
    setRole(e.target.value)
  }
  

//maps over the teamArr and adds a counter and name/role to the tickets
const ticketsJSX = teamArr.map((member) => {
  return (
    <Ticket name={member.name} role={member.role} key={member.id}/>
  )
})
  //what the layout of the website will look like
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
            <AddUser handleSubmit={handleSubmit} setUserName={setUserName} setUserRole={setUserRole} />
        </div>
      </div>
    </div>
  );
}

export default App;
