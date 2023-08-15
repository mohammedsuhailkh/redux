import React from 'react';
import { increment, decrement ,reset} from './counterSlice';
import { useDispatch , useSelector} from 'react-redux';

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
  return (
    <div className='app'>
      <p className='content'>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <br/>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>

  )
}

export default Counter
