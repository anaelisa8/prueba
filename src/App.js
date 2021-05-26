import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow.js';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow />
    <div className="equals">=</div>
    <CurrencyRow />
    </>
  );
}

export default App;
