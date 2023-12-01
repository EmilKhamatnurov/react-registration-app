import React from 'react'
import { createUseStyles } from 'react-jss';
const selectStyles = createUseStyles({
    'select-input': {
        marginBottom: "30px",
        maxWidth: "100%",
        boxSizing: "border-box",
        width: "100%",
        display: "block",
        padding: "14px 20px",
        background: "#242424",
        color: "#FFF",
        fontFamily: "Fira Code;",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #3D3D3D",
        outline: "none",
        "&:focus": {
            border: "1px solid #6900C6",
        }
    }
})

function Select({onChange, shooting_type, value}) {
    const selectStyle = selectStyles();
    return(
        <select 
            className={selectStyle['select-input']} 
            onChange={e => onChange(e)} 
            value={value}  
            name="shooting_type"
            multiple={true}>
            <option value={shooting_type['CATALOG_PHOTOGRAPHY']}>Каталожная съемка на белом фоне</option>
            <option value={shooting_type['STAGED_PHOTOGRAPGY']}>Имиджевая съемка. Простой реквизит</option>
            <option value={shooting_type['ARTISTIC_PHOTOGRAPHY'] }>Имиджевая съемка. Сложная постановка</option>
        </select>
    )
}

export default Select