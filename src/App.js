import "./App.css";
import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const operArr = ["+", "-", "×", "÷"];

const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [calc, setCalc] = useState({ total: 0, operation: "", input: 0 });

  const handleOper = (operation) => {
    if (!calc.operation) {
      const total = calc.input;
      setCalc({ ...calc, operation, total, input: 0 });
    } else {
      const result = handleMath(calc.total, operation, calc.input);
      if (typeof result === "number") {
        setCalc({ ...calc, input: 0, total: result });
      }
    }
  };

  const handleEqual = () => {
    const { total, operation, input } = calc;
    if ((total === 0 && input === 0) || !operation) {
      window.alert("Please Enter an Input and Operation!");
    } else {
      handleOper(operation);
    }
  };

  const handleMath = (total, operation, input) => {
    if (operation === "+") {
      return total + input;
    } else if (operation === "-") {
      return total - input;
    } else if (operation === "×") {
      return total * input;
    } else if (operation === "÷") {
      console.log("HI");
      console.log(total, operation, input);
      if (input === 0) {
        window.alert("Can't Divide by Zero");
      } else {
        return total / input;
      }
    }
  };

  const handleInput = (num) => {
    const input = calc.input * 10 + num;
    setCalc({ ...calc, input });
  };

  const handleClear = () => {
    setCalc({ total: 0, operation: "", input: 0 });
  };

  const handlePosNeg = () => {
    setCalc({ ...calc, input: calc.input * -1 });
  };

  return (
    <div>
      <Screen value={{ title: "Total", result: calc.total }} />
      <Screen value={{ title: "Operator", result: calc.operation }} />
      <Screen value={{ title: "Input", result: calc.input }} />

      <div className="wrapper">
        <div className={"grid"}>
          {operArr.map((val, i) => (
            <Button
              className={"operator-button"}
              value={val}
              key={i}
              onClick={() => handleOper(val)}
            />
          ))}
          {numberArr.map((num, i) => (
            <Button key={i} value={num} onClick={() => handleInput(num)} />
          ))}
          <Button onClick={() => handleEqual()} value={"="} />
          <Button onClick={() => handleClear()} value={`ce`} />
          <Button
            className={"whole-row"}
            onClick={() => handlePosNeg()}
            value={`Pos/Neg`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
