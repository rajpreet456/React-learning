import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", text: "Learn Redux Toolkit" }
  ]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // 1. ADD TODO
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // nanoid() generates a short, unique string ID
        text: action.payload
      };
      // 🚀 Immer magic: looks like direct mutation, but RTK clones it immutably!
      state.todos.push(newTodo);
    },

    // 2. REMOVE TODO
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // 3. UPDATE TODO
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    }
  }
});

// Export individual actions for components to dispatch
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer for the store to register
export default todoSlice.reducer;