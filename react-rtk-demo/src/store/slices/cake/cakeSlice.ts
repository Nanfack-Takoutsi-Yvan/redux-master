import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  numberOfCakes: 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: function (state, action) {
      state.numberOfCakes -= action.payload ? action.payload : 1
    },
    restock: function (state, action) {
      state.numberOfCakes += action.payload ? action.payload : 1
    }
  }
})

export const { order, restock } = cakeSlice.actions
export default cakeSlice.reducer
