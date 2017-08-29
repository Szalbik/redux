
export const SHOW_MESSAGE = "show_message";

export const showMessage = (msg) => ({type: SHOW_MESSAGE, payload: msg})

export default function (state = '', action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    case "ADD_TODO":
    case "LOAD_TODOS":
    case "TOGGLE_TODO":
    case "DELETE_TODO":
      return '';
    default:
      return state;
  }
}
