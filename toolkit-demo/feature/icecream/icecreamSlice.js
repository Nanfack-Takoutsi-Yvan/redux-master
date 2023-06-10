const { cakeActions } = require("../cake/cakeSlice")
const createSlice = require("@reduxjs/toolkit").createSlice

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
    builder.addCase(cakeActions.order, function(state) {
      state.numberOfIceCreams--
    })
  }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions