import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';

const Counter = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [isRunning1, setIsRunning1] = useState(false);
    const [isRunning2, setIsRunning2] = useState(false);

    //Counter 1
    useEffect(() => {
        let interval1 = null;

        if (isRunning1 ) { //&& counter1 < 20
            interval1 = setInterval(() => {
                setCounter1(prevCounter => (prevCounter + 1)%21);
            }, 1000);
        } //else if (counter1 >= 20) {
            //setIsRunning1(false); //Arrête automatiquement
        //}

        return () => clearInterval(interval1); //Nettoyage
    }, [isRunning1, counter1]);

    //Counter 2
    useEffect(() => {
        let interval2 = null;

        if (isRunning2 ) {//&& counter2 < 20
            interval2 = setInterval(() => {
                setCounter2(prevCounter => (prevCounter + 2)%21);
            }, 1000);
        } //else if (counter2 >= 20) {
            //setIsRunning2(false); //Arrête automatiquement
        //}

        return () => clearInterval(interval2); //Nettoyage
    }, [isRunning2, counter2]);

    //counter 1
    const startCounter1 = () => {
        if (counter1 < 20) setIsRunning1(true);
    };
    const stopCounter1 = () => setIsRunning1(false);
    const resetCounter1 = () => {
        setCounter1(0);
        setIsRunning1(false);
    };

    //counter 2
    const startCounter2 = () => {
        if (counter2 < 20) setIsRunning2(true);
    };
    const stopCounter2 = () => setIsRunning2(false);
    const resetCounter2 = () => {
        setCounter2(0);
        setIsRunning2(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Double Counter</h1>

            {/* Counter 1 */}
            <div style={{ marginBottom: '20px' }}>
                <h2>Counter 1 (Incrémentation +1): {counter1}</h2>
                <Button fn={startCounter1} text="Start" disabled={isRunning1} />
                <Button fn={stopCounter1} text="Stop" disabled={!isRunning1} />
                <Button fn={resetCounter1} text="Reset" />
            </div>

            {/* Counter 2 */}
            <div>
                <h2>Counter 2 (Incrémentation +2): {counter2}</h2>
                <Button fn={startCounter2} text="Start" disabled={isRunning2} />
                <Button fn={stopCounter2} text="Stop" disabled={!isRunning2} />
                <Button fn={resetCounter2} text="Reset" />
            </div>
        </div>
    );
};

export default Counter;
