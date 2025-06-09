/*import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0); //This is your primary counter
    const [calculation, setCalculation] = useState(0); // This value changes

    // useEffect runs a "side effect" whenever it's dependencies change.
    // Here, it runs whenever 'count' changes. 
    useEffect(() => {
        // This line updates 'calculation' to be double the current 'count'
        setCalculation(() => count * 2);
    }, [count]): // <---- The dependency array: tells useEffect to re-run when 'count' changes.

    return (
        <>
           <h3>Counter Component (JavaScript)</h3>
           <p>Count: {count}</p>
           <button onClick={() => setCount((c) => c + 1}>Increment Count</button>         
        </>
    );
}

export default Counter;

// To use this in App.jsx
//import Counter from './Counter';
//function App (){ return <Counter  />; } 