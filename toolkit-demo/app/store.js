const configureStore = require("@reduxjs/toolkit").configureStore
const createLogger = require("redux-logger").createLogger

const logger = createLogger()
const cakeReducer = require("../feature/cake/cakeSlice")
const iceCreamReducer = require("../feature/icecream/icecreamSlice")
const userReducer = require("../feature/user/userSlice")

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

module.exports = store