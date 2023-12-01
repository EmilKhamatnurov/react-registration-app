import React from 'react'
import { createUseStyles } from 'react-jss';

const inputStyle = createUseStyles({
    'input-field': {
        marginBottom: "30px",
        maxWidth: "100%",
        boxSizing: "border-box",
        width: "100%",
        outline: "none",
        display: "block",
        padding: "14px 20px",
        background: "#242424",
        color: "#FFF",
        fontFamily: "Fira Code;",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #3D3D3D",
        resize: "none",
        transition: "border-color 0.3s ease",
        "&:focus": {
            borderColor: '#6900C6' 
        }
    }}
)
function Input({ type, inputType, inputName, text, value, onChange }) { 
    const styles = inputStyle();
    if (inputType === "textarea") {
        return(
            <textarea 
                className={styles['input-field']}
                name='comment' 
                rows='5' 
                cols='30'
                placeholder={text}>
            </textarea>
        )
    }  
    return (
        <input 
            className={styles['input-field']}
            placeholder={text} 
            value={value}
            name = {inputName}
            type={type}
            onChange={onChange}/>
    )
}

export default Input