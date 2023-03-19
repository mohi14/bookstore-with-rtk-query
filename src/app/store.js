import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,

  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
