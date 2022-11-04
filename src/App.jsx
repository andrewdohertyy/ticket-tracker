import Header from "./components/Header/Header";
import Ticket from "./components/Ticket/Ticket";
import AddUser from "./components/AddUser/AddUser";
import teamArr from './Data/team.js';
import Search from "./components/Search/Search";
import { useState } from "react";
import './App.scss';



//place to store the functions the app will need
function App() { 

const [array, setArray] = useState(teamArr);
const [name, setUser] = useState('')
const [role, setRole] = useState('')
const [searchValue, setSearchValue] = useState('');




console.log(array);
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

  const getSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const searchName = (array, searchValue) => {
    return array.filter((member) => 
    member.name.toLowerCase().includes(searchValue.toLowerCase()))
  }


//maps over the teamArr and adds a counter and name/role to the tickets
// const ticketsJSX = teamArr.map((member) => {
//   return (
  const ticketsJSX = (array) => {
    return searchName(array, searchValue).map((member, index) => {
      return (
        <div key={index}>
    <Ticket name={member.name} role={member.role} key={member.id}/>
    </div>
  )})}

  //what the layout of the website will look like
  return (
    <div className="app">
      <div className="container">
          <Header className="container__header"/>
          <Search getSearchValue={getSearchValue} array={array} searchValue={searchValue}/>
          <br />
        <div className="container__tickets">
          {ticketsJSX(teamArr)}
        </div>
        <div>
            <AddUser handleSubmit={handleSubmit} setUserName={setUserName} setUserRole={setUserRole} />
        </div>
      </div>
    </div>
  );
}

export default App;
