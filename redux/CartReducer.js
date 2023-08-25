import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //if there is no item in the cart then add To Cart
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        //if item present in cart then increment quantity
        itemPresent.quantity++;
      } else {
        //else quantity==1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeitem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeitem;
    },
    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemPresent.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity == 1) {
        const removeitem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeitem;
      } else {
        itemPresent.quantity--;
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart
} = cartSlice.actions;
export default cartSlice.reducer;
