export default function(state=null,action){
  switch(action.type){
    case "activeBook":
      return action.payload;
  }
  return state;
}
