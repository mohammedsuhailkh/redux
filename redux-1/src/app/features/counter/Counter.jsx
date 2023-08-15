import React, { useState } from 'react';
import { increment, decrement ,reset, incrementByAmount} from './counterSlice';
import { useDispatch , useSelector} from 'react-redux';

const Counter = () => {
  const [Increment, setIncrement] = useState(0); // Initialize with 0
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(Increment) || 0;

  const resetAll = () => {
    setIncrement(0);
    dispatch(reset());
  };

  return (
    <div className="app">
      <p className="content">{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <input
          type="text"
          value={Increment}
          onChange={(e) => setIncrement(e.target.value)}
        />
        <br />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Value</button>
        <br />
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
