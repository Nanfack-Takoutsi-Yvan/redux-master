const createSlice = require("@reduxjs/toolkit").createSlice

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

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions