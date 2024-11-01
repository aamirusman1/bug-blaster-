export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] }; //action.payload => add new ticket to the list

    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };

    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

//action.payload may contain a new ticket in case of action.type ADD TICKET; may contain ticket id and new ticket details
// in case of action.type UPDATE TICKET, and so on.
