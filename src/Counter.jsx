import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';

const Counter = ({increment}) => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    //Counter
    useEffect(() => {
        let interval = null;

        if (isRunning) { //&& counter1 < 20
            interval = setInterval(() => {
                setCounter(prevCounter => (prevCounter + increment)%21);
            }, 1000);
        } //else if (counter1 >= 20) {
            //setIsRunning1(false); //Arrête automatiquement
        //}

        return () => clearInterval(interval); //Nettoyage
    }, [isRunning, increment]);

    //action
    const startCounter = () => {
         setIsRunning(true);
    };
    const stopCounter = () => setIsRunning(false);
    const resetCounter = () => {
        setCounter(0);
        setIsRunning(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Counter : {counter}</h2>
                <Button fn={startCounter} text="Start" disabled={isRunning} />
                <Button fn={stopCounter} text="Stop" disabled={!isRunning} />
                <Button fn={resetCounter} text="Reset" />

        </div>
    );
};

export default Counter;
