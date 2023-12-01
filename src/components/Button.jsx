import React from 'react'
import { createUseStyles } from 'react-jss';

const buttonStyles = createUseStyles({
    submitButton: props => ({
        width: props.width,
        height: props.height,
        padding: "15px 50px",
        borderRadius: "4px",
        background: "#4B72C2",
        fontFamily: "Fira Code;",
        color: "white",
        "&:disabled": {
            background: "#6d7a83",
            opacity: "0.5" 
        }
    }) 
})

function Button(props) {
    const buttonStyle = buttonStyles(props);
    return (
        <button disabled={props.disabled} className={buttonStyle.submitButton} type="submit">
            {props.text}
        </button>
    )
}

export default Button