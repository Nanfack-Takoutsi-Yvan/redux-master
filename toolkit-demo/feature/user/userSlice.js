const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const createSlice = require("@reduxjs/toolkit").createSlice
const axios = require("axios")

const initialState = {
  loading: false,
  users: [],
  error: null
}

const fetchUser = createAsyncThunk("user/fetchUser", function(){
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data.map(data => data.name))
})

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: function(builder) {
    builder.addCase(fetchUser.pending, function(state) {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, function(state, action) {
      state.loading = false
      state.users = action.payload
    })
    builder.addCase(fetchUser.rejected, function(state, action) {
      state.loading = false
      state.error = action.payload
    })
  }
})

module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser