import { getNumberOfCakes, order, restock } from "../../store/slices/cake/cakeSlice"
import { useAppDispatch } from "../../store/types/hooks"

const CakeView = () => {
  const numberOfCake = getNumberOfCakes()
  const dispatch = useAppDispatch()

  const setOrder = () => dispatch(order(1))
  const setRestock = () => dispatch(restock(5))
  
  return (
    <div>
      <h2>Number of cake - {numberOfCake}</h2>
      <button onClick={setOrder}>Order cake</button>
      <button onClick={setRestock}>Restock cake</button>
    </div>
  )
}

export default CakeView