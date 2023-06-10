import { createSlice } from "@reduxjs/toolkit" 
import { order as cakeOrder } from "../cake/cakeSlice"

const initialState = {
  numberOfIceCreams: 10
}

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    order: function (state, action) {
      state.numberOfIceCreams -= action.payload ? action.payload : 1
    },
    restock: function(state, action) {
      state.numberOfIceCreams += action.payload ? action.payload : 1
    }
  },
  extraReducers: function (builder) {
    builder.addCase(cakeOrder, function(state) {
      state.numberOfIceCreams--
    })
  }
})

export const { order, restock } = iceCreamSlice.actions
export default iceCreamSlice.reducer