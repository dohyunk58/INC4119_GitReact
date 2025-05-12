import React from "react";
import useCalculatorlogic from "./useCalculatorlogic";
import Display from "./Display";
import Buttons from "./Buttons";
import "./Calculator.css"

const Calculator = () => {
    const { input, result, handleClick, calculateResult, clearInput, deleteInput} = useCalculatorlogic();

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <Buttons onButtonClick={(value) => {
                if (value === "=") {
                    calculateResult();
                } else if (value === "AC") {
                    clearInput();
                } else if (value === "<") { // "<" 버튼 클릭 시 deleteInput 호출
                    deleteInput();
                } else {
                    handleClick(value);
                }
            }} />
        </div>
    );
};

export default Calculator;