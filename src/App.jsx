import Header from "./Components/Header/Header";
import Ticket from "./Components/Ticket/Ticket";
import './App.scss';
import teamArr from'./Data/team.js'



function App() {


const ticketsJSX = teamArr.map((member) => {
  return (
    <Ticket name={member.name} role={member.role} />
  )
})

console.log(ticketsJSX);

  return (
    <div className="app">

      <div className="container">
          <Header className="container__header"/>
        <div className="container__tickets">
          {ticketsJSX}
        </div>
      </div>

    </div>
  );
}

export default App;
