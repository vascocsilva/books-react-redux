import * as types from '../actions/action-types';

// State argument is not the app state, only the state this reducer
// is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case types.SELECT_BOOK: return action.payload;
  }
  
  return state;
}
