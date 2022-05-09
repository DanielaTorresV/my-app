import React from "react";

const Button = (props) => {
    const {text} = props;
    return <button className="Button">{text}</button>
    };

export default Button;