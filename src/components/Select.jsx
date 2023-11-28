import React from 'react'
import { createUseStyles } from 'react-jss';

function Select({onChange, shooting_type}) {
    return(
        <select onChange={onChange} name="shooting_type">
            <option value={shooting_type['CATALOG_PHOTOGRAPHY']}>Каталожная съемка на белом фоне</option>
            <option value={shooting_type['STAGED_PHOTOGRAPGY']}>Имиджевая съемка. Простой реквизит</option>
            <option value={shooting_type['ARTISTIC_PHOTOGRAPHY'] }>Имиджевая съемка. Сложная постановка</option>
        </select>
    )
}

export default Select