import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'
import "./counter.css"

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

  return (
    <div>
        <div className='redux-count'>
            <button onClick={() => dispatch(decrement())} >-</button> 
            <span style={{fontSize:"30px"}}>{count}</span>
            <button onClick={() => dispatch(increment())} >+</button> 
        </div>
    </div>
  )
}

export default Counter