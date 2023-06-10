import './App.css'
import CakeView from './store/slices/cake/cakeView'
import IceCreamView from './store/slices/icecream/icecreamView'
import UserView from './store/slices/user/userView'

function App() {

  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
