import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value = 10); // retorna [] (arreglo)

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        // forma 2
        // setCounter((c) => c + 1)
    }

    const handleReset = () => {
        setCounter(value);
        // forma 2
        // setCounter((c) => c + 1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
        // forma 2
        // setCounter((c) => c + 1)
    }


    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>

            <button onClick = {handleAdd}>+1</button>
            <button onClick = {handleReset}>Reset</button>
            <button onClick = {handleSubtract}>-1</button>
        </>

    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;