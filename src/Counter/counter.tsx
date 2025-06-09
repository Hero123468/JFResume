/* import React, {useState, useEffect } from 'react';

// function Counter(): JSX.Element { // INdicates this function returns JSX
    // TypeScript infers 'count' and 'calculation; are numbers because of useState(0)
    // const [count, setCount] = useState(0);
    // const [calculation, setCalculation] = useState(0);

    // useEffect works the same way in TypeScript
    // useEffect(() => {
        // setCalculation(() => count * 2);
    // }, [count]); // Dependency array: use Effect runs when 'count' changes.

    // return (
        <>
          {/* <h3>Counter Component (TypeScript)</h3>}
          {/* <p>Count: {count}</p> }
          {/* <button onClick={() => setCount((c) => c + 1)}>Increment Count</button> }
          {/* <p>Calculation (Count * 2): {calculation}</p> 
          }
        {/* </> }
     {/* ); }
{/* } }

{/* export default Counter; }

{/* // To use this in App.tsx }
{/* // import Counter from './Counter'; }
{/* // function App() { return <Counter />: } }*/