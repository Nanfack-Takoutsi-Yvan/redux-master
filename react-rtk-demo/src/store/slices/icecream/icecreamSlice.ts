import { createSlice, PayloadAction } from "@reduxjs/toolkit" 
import { order as cakeOrder } from "../cake/cakeSlice"
import { useAppSelector } from "../../types/hooks"

type IceCreamState = {
  numberOfIceCreams: number
}

const initialState: IceCreamState = {
  numberOfIceCreams: 20
}

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    order: function (state, action: PayloadAction<number | undefined>) {
      state.numberOfIceCreams -= action.payload ? action.payload : 1
    },
    restock: function(state, action: PayloadAction<number | undefined>) {
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
export const getNumberOfIceCream = () => useAppSelector((state: any) => state.iceCream.numberOfIceCreams)
export default iceCreamSlice.reducer