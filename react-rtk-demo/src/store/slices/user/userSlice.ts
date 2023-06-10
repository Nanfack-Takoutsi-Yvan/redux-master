import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type userState = {
  loading: boolean,
  users: string[],
  error?: string
}

const initialState: userState = {
  loading: false,
  users: [],
  error: undefined
}

export const fetchUser = createAsyncThunk("user/fetchUser", function(){
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data.map((data: any) => data.name))
})

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: function (builder) {
    builder.addCase(fetchUser.pending, function (state) {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, function (state, action) {
      state.loading = false
      state.users = action.payload
    })
    builder.addCase(fetchUser.rejected, function (state, action) {
      state.loading = false
      state.error = action.payload as any
    })
  },
  reducers: {}
})

export default userSlice.reducer