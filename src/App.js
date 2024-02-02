import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  let [amount,setamount]=useState('');
  let [interest,setinterest]=useState('');
  let [term,setterm]=useState('');
  let [date,cdate]=useState('');
  let [table,tabledata]=useState([]);
  const getvalue =()=>{
    let balance = parseFloat(amount);
    const interestRate=parseFloat(interest)/100/12;
    const terms=parseInt(term)*12;
    const payment=(interestRate*balance)/(1-Math.pow(1+interestRate,-terms));

    let arr=[];
    for(let i = 1; i <=terms; i++){
      let interest=balance*interestRate;
      let principal=payment-interest;
      let amount=balance-principal;
      arr.push({
        balance: parseFloat(balance).toFixed(2),
        principal: parseFloat(principal).toFixed(2),
        interest: parseFloat(interest).toFixed(2),
        amount: Math.abs(parseFloat(amount).toFixed(2)),
      });
      balance=amount;

    }
    
    tabledata(arr);
  }
  return (
    <div className="App">
      <div>
        <h3>loan amount:</h3>
        <input type="text" name="" onChange={(e) => setamount(e.target.value)}></input>
      </div>
      <div>
        <h3 >interest rate:</h3>
        <input type="text" name="" onChange={(e) => setinterest(e.target.value)}></input>
      </div>
      <div>
        <h3>term:</h3>
        <input type="text" name="" onChange={(e) => setterm(e.target.value)}></input>
      </div>
      <div>
        <h3>start date:</h3>
        <input type="date" name="" value={date} onChange={(e) => cdate(e.target.value)}></input>
      </div>
      <div>
        <button onClick={getvalue} value="calculate">Calculate EMI</button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>Balance</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <td>{row.balance}</td>
              <td>{row.principal}</td>
              <td>{row.interest}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
