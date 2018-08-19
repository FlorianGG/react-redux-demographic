import { ERR_GET_COUNTRIES, GET_COUNTRIES } from '../actions';


export default function(state = null, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload
    case ERR_GET_COUNTRIES:
      return action.errors
    default:
      return state
  }
}
