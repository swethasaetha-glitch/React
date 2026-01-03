import React, { createContext } from 'react'
import './Home.css'
import User from '../User'
import State from '../hooks/State'
import Form from '../hooks/Form'

export const userContext=createContext()

const Home = () => {
  return (
    <div>
      <userContext.Provider value="asdfg">
        <User name="xyz"/>
        <State/>
      <Form/>
      </userContext.Provider>
        
      
    </div>
  )
}

export default Home