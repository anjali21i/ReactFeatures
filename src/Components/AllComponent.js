import React, { useState, useEffect, useContext, useReducer, useRef, useCallback, useMemo } from 'react';

// Example of useState
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

// Example of useReducer
const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Counter with Reducer</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};

// Example of useEffect
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return <div>Timer: {seconds} seconds</div>;
};

// Example of useContext
const ThemeContext = React.createContext();
const ThemedComponent = () => {
    const theme = useContext(ThemeContext);
    return <div>Current Theme: {theme}</div>;
};

// Example of useRef
const TextInputWithFocusButton = () => {
    const inputEl = useRef(null);
    const focusInput = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

// Example of useCallback
const MemoizedCallback = () => {
    const [count, setCount] = useState(0);
    const memoizedCallback = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>Memoized Callback</h2>
            <p>Count: {count}</p>
            <button onClick={memoizedCallback}>Increment</button>
        </div>
    );
};

// Example of useMemo
const MemoizedValue = () => {
    const [count, setCount] = useState(0);
    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

    return (
        <div>
            <h2>Memoized Value</h2>
            <p>Count: {count}</p>
            <p>Double Count: {doubleCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

// App component
const AllComponent = () => {
    return (
        <ThemeContext.Provider value="light">
            <div>
                <Counter />
                <Timer />
                <ThemedComponent />
                <CounterWithReducer />
                <TextInputWithFocusButton />
                <MemoizedCallback />
                <MemoizedValue />
            </div>
        </ThemeContext.Provider>
    );
};

export default AllComponent;