import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface item {
  id: number,
  name: string,
  price: number,
  quantity: number,
  img: string,
}

const initialState: item[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<item>) {
      const itemInCart = state.find((cartItem) => cartItem.id === action.payload.id)
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.push(action.payload)
      }
    },
    removeItem(state, action: PayloadAction<item>) {
      const itemToRemove = state.find((item) => item.id === action.payload.id)
      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          return state.filter(item => item.id !== action.payload.id);
        } else {
          itemToRemove.quantity -= 1;
        }
      }
    },
    setProducts(state, action: PayloadAction<item[]>) {
      state = action.payload
    }
  },
});

export const { addItem, removeItem, setProducts } = cartSlice.actions;
export default cartSlice.reducer;
