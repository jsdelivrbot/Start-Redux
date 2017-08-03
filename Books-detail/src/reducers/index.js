import { combineReducers } from 'redux';
import BookReducer from "./book-list";
import ActiveBook from "./book-active";
const rootReducer = combineReducers({
  book : BookReducer,
  activeBook :ActiveBook
});

export default rootReducer;
