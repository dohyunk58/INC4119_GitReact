import React from "react";

const Display = ({ input, result }) => { // Display Compnent의 Props input, result
    return ( // input이 비어있는경우 기본값 0, 아래는 계산결과는 result로 표시
        <div>
            <div className="display-input">{input || "0"}</div>
            <div className="display-result">{result}</div>
        </div>
    );
};

export default Display;