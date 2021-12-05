import { combineReducers } from 'redux';
import { cartReducer } from './slices/cart';

const reducer = combineReducers({
  cartReducer,
});

export { reducer };
