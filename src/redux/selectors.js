import { createSelector } from "reselect";
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todosRemaining;
// };

export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritiesSelector = (state) => state.filter.priority;

export const todoRemaining = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, search, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(search) && priorities.includes(todo.priority)
          : todo.name.includes(search);
      }
      return (
        todo.name.includes(search) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
