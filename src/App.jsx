import { useState } from 'react'
import './App.css'
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1> Double Counter App</h1>
        <Counter />
    </>
  );
}

export default App;
