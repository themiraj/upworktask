import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const [indicateChange, setIndicateChange] = useState(false)
  
  const [textChange, setTextChange] = useState(false)
  
  const handleIncrement = () => {
      animationIndicate()
      setCount((prev) => prev + 1);
  };
  
  const handleDecrement = () => {
      if(count < 1) return;
      animationIndicate()
      setCount((prev) => prev - 1);
    };
    
    const animationIndicate = () => {
        setIndicateChange((prev) => !prev);
        setTimeout(()=> {
            setIndicateChange((prev) => !prev);
        },[300])
    }
    // debugger;

  return (
    <div className='counter-parent'
        onMouseEnter={() => {setTextChange(true)}}
        onMouseLeave={() => {setTextChange(false)}}
    >
        <div className={`heading ${textChange ? 'ready' : null}`}>
            {textChange ?  'try to click on button' : 'Counte Application'}
        </div>
        <div className='counter'>
            <button onClick={() => handleDecrement()}>Decrement</button>
            <div className={`counter-value ${indicateChange ? 'changing' : null}`}>{count}</div>
            <button onClick={() => handleIncrement()}>Increment</button>
      </div>
      <button onClick={() => setCount(0)} className='reset'>Reset</button>
    </div>
  );
}

export default Counter;
