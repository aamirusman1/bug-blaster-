import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm.js";
import ticketReducer from "./reducers/ticketReducer.js";
import TicketList from "./components/TicketList.js";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null, //To know which ticket we are editing
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>
        {
          state.tickets.length > 0 && (
            <div className="results">
              <h2>All Tickets</h2>
              <TicketList
                tickets={state.tickets}
                dispatch={dispatch}
              ></TicketList>
            </div>
          )

          /* && -> This is then operator meaning if condition is true then  */
        }
      </div>
    </div>
  );
}

export default App;
