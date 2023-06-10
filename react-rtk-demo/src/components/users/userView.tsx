import { useEffect } from "react"
import { fetchUsers, getUser } from "../../store/slices/user/userSlice"
import { useAppDispatch } from "../../store/types/hooks"

const UserView = () => {
  const user = getUser()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h2>List of users</h2>
      {user.loading 
        ? (<h4>...loading</h4>)
        : (
          <ul>
            {user.users.map((user, index) => <li key={`${user}-${index}`}>{user}</li>)}
          </ul>
        )
      }
    </div>
  )
}

export default UserView