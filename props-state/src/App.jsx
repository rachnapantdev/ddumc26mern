import Users from "./compoents/prop-state/Users"
import Parent from "./compoents/props/Parent"
import Counter from "./compoents/stateswork/Counter"
import User from "./compoents/stateswork/User"

const App = () => {
  return (
    <>
        <Parent />
        {/* State */}
        <User />
        <Counter />
        {/* prop + State */}
      <Users />
    </>
  )
}

export default App
