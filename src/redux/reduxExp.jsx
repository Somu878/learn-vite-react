import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { increment, decrement ,incrementByAmount } from "./Counter";
import './reduxExp.css'
function ReduxExp() {
  const value = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();
  const [val,setVal]= useState()

  return (
    <div>
      <div className='box'>
      <h1>The Count is: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button><br /><br />
      <input onChange={e=>{
        setVal(e.target.value)
      }} value={val} type="number" /><button onClick={()=>dispatch(incrementByAmount(Number(val)))}>Increment by {val}</button>
      </div>
    </div>
  );
}

export default ReduxExp;
