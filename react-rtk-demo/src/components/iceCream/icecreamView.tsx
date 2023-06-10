import { getNumberOfIceCream, order, restock } from "../../store/slices/icecream/icecreamSlice"
import { useAppDispatch } from "../../store/types/hooks"

const IceCreamView = () => {
  const numberOfIceCream = getNumberOfIceCream()
  const dispatch = useAppDispatch()

  const setOrder = () => dispatch(order())
  const setRestock = () => dispatch(restock(5))
  
  return (
    <div>
      <h2>Number of ice cream - {numberOfIceCream}</h2>
      <button onClick={setOrder}>Order ice cream</button>
      <button onClick={setRestock}>Restock ice cream</button>
    </div>
  )
}

export default IceCreamView