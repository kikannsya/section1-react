import React, { useState } from 'react'

export const TestComponent = () => {
    const [count, setCount] = useState(0);
    const onClickChange =() =>{
        setCount((prev) => prev + 1)
        setCount((prev) => prev + -3)
    }
    return (
    <div>
        <p>テストコンポーネント!!</p>
        <button onClick={onClickChange}>-2</button>
        <h2>{count}</h2>
    </div>
  );
}