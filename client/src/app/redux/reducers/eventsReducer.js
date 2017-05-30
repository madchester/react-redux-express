import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function getEvents (state = initialState.events, action) {
  switch (action.type) {
    case types.GET_ALL_IMAGES:
      return Object.assign({}, state, {getAllImages: action.payload});
    case types.GET_IMAGES:
    	return Object.assign({}, state, {getImages: action.payload});
    default:
      return state;
  }
}

