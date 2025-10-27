import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.items.find((obj)=>obj.id===action.payload.id)

      if(findItem){
        findItem.count++
      } else{
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) => {return (obj.price*obj.count)+sum}, 0)
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    itemPlus(state, action){
      const findItem = state.items.find((obj)=>obj.id===action.payload)
      if(findItem){
        findItem.count += 1;
        state.totalPrice = state.items.reduce((sum, item) => item.price*item.count+sum, 0)
      }
    },
    itemMinus(state, action){
      const findItem = state.items.find((obj)=>obj.id===action.payload)
      if(findItem){
        findItem.count -= 1;
        state.totalPrice = state.items.reduce((sum, item) => item.price*item.count+sum, 0)
      }
    },
    itemClear(state, action){
      state.items = state.items.filter((obj) =>  obj.id !== action.payload)
      state.totalPrice = state.items.reduce((sum, obj) => {return (obj.price*obj.count)+sum}, 0)
    }
  },
});

export const { addItems, removeItems, clearItems, itemPlus, itemMinus, itemClear } = cartSlice.actions;
export default cartSlice.reducer;
