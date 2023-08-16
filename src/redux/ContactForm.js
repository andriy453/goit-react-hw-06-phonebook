import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  // Ім'я слайсу
  name: "value",
  // Початковий стан редюсера слайсу
  initialState: '',
  // Об'єкт редюсерів
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;