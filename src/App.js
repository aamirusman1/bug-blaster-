import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm.js";
import ticketReducer from "./reducers/ticketReducer.js";
import TicketList from "./components/TicketList.js";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null, //To know which ticket we are editing
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

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

              <select
                value={state.sortPreference}
                onChange={(e) =>
                  dispatch({ type: "SET_SORTING", payload: e.target.value })
                }
              >
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>

              <TicketList
                tickets={sortedTickets}
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
