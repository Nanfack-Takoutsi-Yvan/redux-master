const store = require("./app/store")
const { fetchUser } = require("./feature/user/userSlice")
const { cakeActions } = require("./feature/cake/cakeSlice")
const { iceCreamActions } = require("./feature/icecream/icecreamSlice")


// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(iceCreamActions.order())
// store.dispatch(cakeActions.restock(3))
// store.dispatch(iceCreamActions.restock(5))

store.dispatch(fetchUser())