import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const [amount,setAmount]=useState(0);
 const handler=((e)=>setAmount(e.target.value));
  return (
    
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <input
        type='number' name='amount' value={amount}
        onChange={handler}></input>
        <button onClick={()=>setCount(amount)}>Set</button>
    </div>
  )
}

export default Counter
