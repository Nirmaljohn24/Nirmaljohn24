import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice';


const Counter = () => {

    const dispatch = useDispatch();

     const count = useSelector((state) => state.counter.value);
     
    //  console.log(count);

  return (
    <div>
       <h1>Count :{count}</h1>
       <button onClick={() => dispatch(increment(1))}>Increment</button>
       <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Counter