import { useState } from "react";

const useCalculatorLogic = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => setInput((prev) => prev + value);

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            if(input === "") setResult("0"); // 모든 것을 지웠을 때 result를 0으로 출력하도록 함
            else setResult("Error");
        }
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    // 맨 뒤 한 글자를 지우기
    const deleteInput = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    return { input, result, handleClick, calculateResult, clearInput, deleteInput };
};

export default useCalculatorLogic;