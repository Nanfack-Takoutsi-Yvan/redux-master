import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useAppSelector } from "../../types/hooks"

const initialState = {
  numberOfCakes: 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: function (state, action: PayloadAction<number | undefined>) {
      state.numberOfCakes -= action.payload ? action.payload : 1
    },
    restock: function (state, action: PayloadAction<number | undefined>) {
      state.numberOfCakes += action.payload ? action.payload : 1
    }
  }
})

export const { order, restock } = cakeSlice.actions
export const getNumberOfCakes = () => useAppSelector(state => state.cake.numberOfCakes)
export default cakeSlice.reducer
