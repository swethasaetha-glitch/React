import React from 'react'
import './Home.css'
import User from '../User'
import State from '../hooks/State'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div>
        <User name="xyz"/>
        <State/>
      <Form/>
      
    </div>
  )
}

export default Home