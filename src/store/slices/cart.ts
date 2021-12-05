import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TPayload = {
  items?: string;
};

type TState = {
  items: string[];
};

const initialState: TState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<TPayload>) => {
      state.items.push(payload.items as string);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
