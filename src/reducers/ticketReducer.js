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
        editingTicket: null, //After ticket is edited successfully
      };

    case "DELETE_TICKET":
      //If we are editing a ticket and then deleted the same ticket we need to reset the form; if we delete other tickets
      //we do not want to reset the form.
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null,
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
        };
      }

    case "SET_EDITING_TICKET":
      return {
        ...state,
        editingTicket: action.payload,
      };

    case "CLEAR_EDITING_TICKET":
      return {
        ...state,
        editingTicket: null,
      };

    default:
      return state;
  }
}

//action.payload may contain a new ticket in case of action.type ADD TICKET; may contain ticket id and new ticket details
// in case of action.type UPDATE TICKET, and so on.
