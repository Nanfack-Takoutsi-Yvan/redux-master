import { configureStore } from "@reduxjs/toolkit"
import * as reduxLogger from "redux-logger"

import cakeReducer from "./slices/cake/cakeSlice"
import iceCreamReducer from "./slices/icecream/icecreamSlice"
import userReducer from "./slices/user/userSlice"

const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  },
  middleware: function(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(logger)
  }
}) 

export default store
