import React, {useState}  from "react";
import "./index.css";

export default function Calculator() {

  const [label, setLabel] = useState('+');
  const [totalOps, setTotalOps] = useState(0);
  const [result,setResult] = useState(0);
  const [firstValue,setFirstValue] = useState('');
  const [secondValue,setSecondValue] = useState('');

  const changeFirstValue = (event) =>{
    let value = parseFloat(event.target.value);
    setFirstValue(value);
  
  }
  const changeSecondValue = (event) =>{
    let value = parseFloat(event.target.value);
    setSecondValue(value);
  }

  const doSum = () =>{
      setResult(firstValue+secondValue);
      setTotalOps(totalOps+1);
      setLabel('+');
      document.getElementsByClassName('result-value')[0].style.display = 'block';
  }
  const doSub = () =>{
    setResult(firstValue-secondValue);
    setTotalOps(totalOps+1);
    setLabel('-');
    document.getElementsByClassName('result-value')[0].style.display = 'block';
  }
  const doMul = () =>{
    setResult(firstValue*secondValue);
    setTotalOps(totalOps+1);
    setLabel('*');
    document.getElementsByClassName('result-value')[0].style.display = 'block';
  }
  const doDiv = () =>{
    setResult(firstValue/secondValue);
    setTotalOps(totalOps+1);
    setLabel('/');
    document.getElementsByClassName('result-value')[0].style.display = 'block';
  }
  const resetData = () =>{
    setFirstValue('');
    setSecondValue('');
    setLabel('+');
    setResult(0);
    // console.log();
    document.getElementsByClassName('result-value')[0].style.display = 'none';

  }
  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {totalOps}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" onChange={changeFirstValue} value={firstValue} className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                  name="input1"/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{label}</label>
            <input type="number" onChange={changeSecondValue} value={secondValue} data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                  placeholder="Eg: 2"/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" onClick={doSum} type="submit" data-testid="addButton">+</button>
            <button className="operationFont" onClick={doSub} type="submit" data-testid="subtractButton">-</button>
            <button className="operationFont" onClick={doMul} type="submit" data-testid="multiplyButton">*</button>
            <button className="operationFont" onClick={doDiv} type="submit" data-testid="divideButton">/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" onClick={resetData} data-testid="resetButton" className="outline danger">Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}