import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';

const Counter = ({increment = 1}) => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [reachesTwenty, setReachesTwenty] = useState(0); // Compte le nombre de fois où on atteint 20

    //Counter
    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setCounter(prevCounter => {
                    const newCounter = (prevCounter + increment)%21;
                    if (prevCounter === 20) { //prevCounter + increment >= 20 && newCounter === 0
                        setReachesTwenty(prevCount => prevCount + 1);
                    }
                    return newCounter;
                });
            }, 100);
        }

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
        setReachesTwenty(0); //On reinitialise aussi ce compteur?
    };

    return (
        <div style={{padding: '20px'}}>
            <h2>Counter : {counter}</h2>
            <h3>Reached 20: {reachesTwenty} times</h3>
            <Button fn={startCounter} text="Start" disabled={isRunning}/>
            <Button fn={stopCounter} text="Stop" disabled={!isRunning}/>
            <Button fn={resetCounter} text="Reset"/>

        </div>
    );
};

export default Counter;
