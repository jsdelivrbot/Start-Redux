import { FETCH_WEATHER } from "../actions/index";

export default function(state=[],action){
  switch(action.type){
      case FETCH_WEATHER:
        return [action.payload.data,...state]; //es 6 syntax used here similar to state.concat(action.payload.data)
  }
  return state;
}
