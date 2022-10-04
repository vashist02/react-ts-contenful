import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { reducer } from './reducer';

const middleware = [createLogger()];

const store = configureStore({
  reducer,
  middleware,
});

export type TStore = ReturnType<typeof store.getState>;

export default store;
