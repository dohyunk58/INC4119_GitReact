import React from "react";

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["0", ".", "**", "+"],
        ["AC", "=", "<", "%"]
    ];

    return (
        <div>
            {buttons.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((btn) => (
                        <button key={btn} onClick={() => onButtonClick(btn)}>
                            {btn}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Buttons;