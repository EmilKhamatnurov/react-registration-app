import React from 'react'
import { createUseStyles } from 'react-jss';

const buttonStyles = createUseStyles({
    submitButton: props => ({
        width: props.width,
        height: props.height,
        padding: "15px 50px",
        borderRadius: "4px",
        background: "#4B72C2",
        color: "white",
    }) 
})

function Button(props) {
    const buttonStyle = buttonStyles(props);
    return (
        <button className={buttonStyle.submitButton} type="submit">
            {props.text}
        </button>
    )
}
export default Button