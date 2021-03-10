import React, {useState} from 'react';

const App = () => {

    const [count, setCount] = useState(5);
    
    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className='container'>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
  );
}

export default App;