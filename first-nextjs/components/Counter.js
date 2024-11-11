import React, { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);
    
    const buttonStyle = {
        backgroundColor: "blue",
        color: "black",
        padding: props.size + "rem",
        borderRadius: "10px",
    };
    
    const handleClick = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1 * props.mult;
            return newCount > 10 ? 0 : newCount;
	});
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick} style={buttonStyle}>
                {props.name}
            </button>
        </div>
    );
}
