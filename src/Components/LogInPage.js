import React, { useState, useEffect, useContext } from 'react';
import { Context } from './ContextTest';

const LogInPage = ({ getTextCallback }) => {
  const [dataVal, setDataVal] = useState("");
  const [effData, setEffData] = useState(0);

  const { updateEmail } = useContext(Context);

  useEffect(() => {
    setEffData(effData + 1)
  }, [dataVal])

  // useEffect(() => {
  //     setEffData(effData+1)
  // })

  useEffect(() => {
    setEffData(effData + 1)
  }, [])

  const submitHandler = () => {
    getTextCallback(dataVal);
    updateEmail(dataVal);
  }

  return <>
    <h1>Login</h1>
    <div> <>{effData}</></div>
    <input
      type="email"
      placeholder="Enter your email"
      value={dataVal}
      onChange={(e) => setDataVal(e.target.value)} />
    <button
      onClick={submitHandler}>
      Submit
    </button>
  </>
}

export default LogInPage;