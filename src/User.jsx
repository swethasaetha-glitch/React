import React, { useContext } from 'react'
import { userContext } from './pages/Home'

const User = ({name}) => {
  const a=useContext(userContext)
  return (
    <div>
      <h2>usecontext value:{a}</h2>
      i am {name}
    </div>
    
  )
}

export default User