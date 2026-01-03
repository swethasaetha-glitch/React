import {useState} from 'react'
import './State.css';
const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
  return (
    <div>
        <h1>UseState Example</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <h1>Likes {like}</h1>
        <button  onClick={()=>setLike(like+1)}>👍</button>
        <button  onClick={()=>setLike(like-1)}>😢</button>
    </div>
  )
}

export default State