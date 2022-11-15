import "./App.css";
import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const operArr = ["+", "-", "*", "/", "^"];

const numberArr = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

function App() {
  const [calc, setCalc] = useState({
    total: 0,
    input: "",
    screen: "Total",
  });

  const handleFormula = (target) => {
    let { input } = calc;
    if (input.length > 0) {
      const prevChar = input[input.length - 1];
      if (!isNaN(Number(prevChar)) && target === "(") {
        input += "*";
      } else if (!isNaN(Number(target)) && prevChar === ")") {
        input += "*";
      }
    }
    input += target;
    setCalc({ ...calc, input, screen: "Input" });
  };

  const handleEqual = () => {
    try {
      const input = calc.input.replaceAll(/\^/g, "**");
      const total = eval(input);
      setCalc({ ...calc, total, screen: "Total", input: "" });
    } catch (error) {
      console.log(error);
      window.alert("Error occured when solving");
      handleClear();
    }
  };

  const handleClear = () => {
    setCalc({ total: 0, input: "", screen: "Total" });
  };

  return (
    <div>
      <Screen
        value={{
          title: calc.screen,
          result: calc.screen === "Total" ? calc.total : calc.input,
        }}
      />

      <div className="wrapper">
        <div className={"grid"}>
          {operArr.map((val, i) => (
            <Button
              className={"operator-button"}
              value={val}
              key={i}
              onClick={() => handleFormula(val)}
            />
          ))}
          {numberArr.map((num, i) => (
            <Button key={i} value={num} onClick={() => handleFormula(num)} />
          ))}
          <Button
            className={"equal"}
            onClick={() => handleEqual()}
            value={"="}
          />
          <Button
            className={"parentheses"}
            onClick={() => handleFormula("(")}
            value={`(`}
          />
          <Button
            className={"parentheses"}
            onClick={() => handleFormula(")")}
            value={`)`}
          />
          <Button
            className={"clear"}
            onClick={() => handleClear()}
            value={`ce`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
