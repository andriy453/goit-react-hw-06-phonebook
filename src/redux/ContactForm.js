import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  // Ім'я слайсу
  name: "value",
  // Початковий стан редюсера слайсу
  initialState: '',
  // Об'єкт редюсерів
  reducers: {
   formSabmitHendler( name, number ){
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        Notiflix.Notify.failure(`${name} is already in contacts.`);
      } else if (contacts.find(contact => contact.number === number)) {
        Notiflix.Notify.failure(`${number} is already in contacts.`);
      } else {
        setContacts([contact, ...contacts]);
      }
    };
  },
});

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;