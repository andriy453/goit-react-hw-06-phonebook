import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer, filtersReducer } from "./reducer";

 const store = configureStore({
  reducer: {
    // users: tasksReducer,
    // filters: filtersReducer,
  },
});
export default  store;
