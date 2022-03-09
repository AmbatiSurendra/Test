import { SET_USER, REMOVE_USER } from '../actions/types';

const initialState = {usertype : ""}

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {usertype : payload};
    case REMOVE_USER:
      return {usertype : ""};
    default:
      return state;
  }
}

export default userReducer;