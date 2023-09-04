import { useState } from 'react';

import { createSlice } from "@reduxjs/toolkit";


const [contacts, setContacts] = useState(() => {return JSON.parse(localStorage.getItem("contacts"))});

const tasksSlice = createSlice({

  // Ім'я слайсу
  name: "ContactForm",
  // Початковий стан редюсера слайсу
  contacts: [],
  // Об'єкт редюсерів
  reducers: {
   Delite(todoId){setContacts(contacts.filter((i) => i.id !== todoId))},
  },
});

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;