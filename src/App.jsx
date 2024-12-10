import React from 'react'
import './App.css'
import Counter from './Counter';

const App =() => {
  return (
    <>
        <h1> Double Counter App</h1>

        {/*Counter 1 (incrémentation de +1)*/}
        <Counter increment={1}/>

        {/*Counter 2 (incrémentation de +2)*/}
        <Counter increment={2}/>
    </>
  );
};

export default App;
