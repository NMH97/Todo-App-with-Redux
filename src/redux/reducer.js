import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filter: filtersReducer,
  todoList: todoListReducer,
});
export default rootReducer;
