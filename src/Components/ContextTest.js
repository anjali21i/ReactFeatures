import React, { useState, useEffect, createContext, useContext } from 'react';
import Home from "./Home";
import LogInPage from './LogInPage';

export const Context = createContext();
const ContextProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const updateEmail = (value) => {
        setEmail(value);
    }
    return (
        <Context.Provider value={{ email, updateEmail }}>
            {children}
        </Context.Provider>
    );
}

export default function ContextTest() {

    const [textData, setTextData] = useState('');
    const getTextCallback = (text) => {
        setTextData(text);
    }

    return (
        <ContextProvider>
            <div>
                <LogInPage getTextCallback={getTextCallback} />
                <Home email={textData} />
                <Footer />
            </div>
        </ContextProvider>
    );
}

export const Footer = () => {
    const { email } = useContext(Context);
    console.log(email);
    return <>
        <h1>Footer</h1>
        {
            email
        }
    </>
}
