import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Counter from './components/Counter'
import Todo from './components/Todo'
import TextUtils from './components/TextUtils'

const App = () => {
  const [flag, setFlag] = useState(false)
  return (
    <>
      <div className="container">
        {/* {
          flag ?
            <>
              <Register />
              <Login />
              </>
            :

            <Logout />

        }
        <Counter />

        <Todo /> */}
        <TextUtils />

      </div>
    </>
  )
}

export default App
