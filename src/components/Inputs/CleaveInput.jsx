import React from 'react';
import Cleave from 'cleave.js/react';
import '../../../node_modules/cleave.js/dist/addons/cleave-phone.ru';
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

function CleaveInput({type, inputName, text, value, onChange}) {
    const input_style = inputStyle()

    return (
        <Cleave
            className={input_style["input-field"]} 
            placeholder={text}
            options={{
                    phone: true,
                    phoneRegionCode: 'RU'
            }}
            onChange={onChange} 
            name={inputName}
            value={value}
            />
    );
}

export default CleaveInput