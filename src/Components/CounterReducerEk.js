import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

const CounterReducerEk = props => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    // Event handlers that dispatch actions
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

CounterReducerEk.propTypes = {}

export default CounterReducerEk
