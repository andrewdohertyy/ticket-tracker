import Header from "./Components/Header/Header";
import Ticket from "./Components/Ticket/Ticket";
import AddUser from "./Components/AddUser/AddUser";
import teamArr from './Data/team.js';
import Search from './Components/Search/Search';
import './App.scss';


function App() {

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
        <div className="container__tickets">
          {ticketsJSX}
        </div>
        <div>
          <AddUser teams={teamArr}/>
        </div>

      </div>

    </div>
  );
}

export default App;
