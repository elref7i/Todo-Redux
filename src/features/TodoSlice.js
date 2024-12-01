import { createSlice } from '@reduxjs/toolkit';

//* initail State

const initialState = {
  todoList: [],
};
//{id:1,title,property (check done)}
//* reducers ==> action creater ,reducer function
const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((todo) => {
        if (action.payload === todo.id) {
          todo.done ? (todo.done = false) : (todo.done = true);
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = TodoSlice.actions;
export default TodoSlice.reducer;
