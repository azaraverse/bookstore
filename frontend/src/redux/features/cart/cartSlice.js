import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
      if(!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          title: 'Done.',
          text: 'Added to cart successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Item already exists in cart!',
          icon: 'info',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
