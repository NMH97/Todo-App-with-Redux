export const createAddTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const searchTextChange = (text) => {
  return {
    type: "filters/searchTextChange",
    payload: text,
  };
};
export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};
export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
