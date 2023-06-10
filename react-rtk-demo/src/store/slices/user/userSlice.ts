import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { useAppSelector } from "../../types/hooks"

type userState = {
  loading: boolean,
  users: string[],
  error?: AxiosError["message"]
}

const initialState: userState = {
  loading: false,
  users: [],
  error: undefined
}

export const fetchUsers = createAsyncThunk("user/fetchUser", function(){
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data.map((data: any) => data.name))
})

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: function (builder) {
    builder.addCase(fetchUsers.pending, function (state) {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, function (state, action: PayloadAction<string[]>) {
      state.loading = false
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, function (state, action) {
      state.loading = false
      state.error = action.payload as string
    })
  },
  reducers: {}
})

export const getUser = () => useAppSelector(state => state.user)
export default userSlice.reducer