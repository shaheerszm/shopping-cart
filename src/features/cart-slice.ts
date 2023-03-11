import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface item {
  id: number,
  name: string,
  img: string,
  quantity: number,
}

const initialState: item[] = [
  {
    name: 'x',
    id: 1,
    img: 'ssss',
    quantity: 1
  },
  {
    name: 'y',
    id: 2,
    img: 'aaa',
    quantity: 5
  }
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<item>) {
      state.push(action.payload);
    },
    removeItem(state, action: PayloadAction<item>) {
      const itemToRemove: any = state.find((item) => item.id === action.payload.id)
      if (itemToRemove.quantity === 1) {
        state = state.filter(item => item.id != action.payload.id);
      } else {
        itemToRemove.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
