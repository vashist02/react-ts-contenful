import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

const store = configureStore({
  reducer,
});

export type TStore = ReturnType<typeof store.getState>;

export default store;
