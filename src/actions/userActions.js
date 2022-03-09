import { SET_USER, REMOVE_USER } from "./types";

export const setUser = (email) => async ( dispatch) => dispatch({ type: SET_USER, payload: email })
export const removeUser = () => async ( dispatch) => dispatch({ type: REMOVE_USER })
