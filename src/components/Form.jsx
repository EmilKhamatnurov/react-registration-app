import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import Cleave from 'cleave.js/react';

import Input from './Input'
import CleaveInput from './Inputs/CleaveInput';
import Button from './Button';
import Select from './Select';

const formStyles = createUseStyles({
    'inputs-form': {
        maxWidth: "100%",
        width: "100%",
    },
    'error': {
        color: "red",
        fontSize: "24px"
    }
})

function Form() {
    // КОНСТАНТЫ
    const SHOOTING_TYPES = {
        CATALOG_PHOTOGRAPHY: 'Каталожная съемка на белом фоне',
        STAGED_PHOTOGRAPGY: 'Имиджевая съемка. Простой реквизит',
        ARTISTIC_PHOTOGRAPHY: 'Имиджевая съемка. Сложная постановка'
    }

    const formStyle = formStyles();
    // STATES
    const [inputError, setError] = useState({
        text: '',
        isError: false
    });

    const [form, setForm] = useState({
        name: '',
        number: '',
        photoQuantity: 0,
        productQuantity: 0,
        comment: '',
        shooting_type: [SHOOTING_TYPES['CATALOG_PHOTOGRAPHY']]
    })

    // FUNCTIONS
    function handleInputChange(e) {
        const {name, value, type} = e.target

        setForm({
            ...form, 
            [name]: value
        })
        console.log(form);
    }

    function handleSelectChange(e) {
        const options = [...e.target.selectedOptions];
        const values = options.map(option => option.value);
        setForm({
            ...form,
            shooting_type: values,
        })
    }

    const isPositiveNumber = (number) => parseInt(number) >= 0; 

    function handleSubmit() {
        alert(form.name)
    }
    
    // Cleave phone number input 
    const cleave = new Cleave('.input-element', {
        phone: true,
        phoneRegionCode: '{country}'
    });

    // RENDER
    return (
        <form className={formStyle['inputs-form']} onSubmit={handleSubmit}>
            <div className={formStyle.error}>
                {inputError['isError'] ? inputError['text'] : ''}
            </div>
            <Input
                text='Имя и Фамилия'
                inputType='simple input'
                type="text"
                value={form.name}
                inputName='name'
                onChange={handleInputChange}/>

            <CleaveInput
                text='+7 (999) 999-99-99'
                type="number"
                value={form.number}
                inputName='number'
                onChange={handleInputChange}/>
            {/* <Input
                text='+7 (999) 999-99-99'
                inputType='simple input'
                type="number"
                value={form.number}
                inputName='number'
                onChange={handleInputChange}
                /> */}
            <Input
                text='Количество фото'
                inputType='simple input'
                type="number"
                value={form.photoQuantity}
                inputName='photoQuantity'
                onChange={handleInputChange}/>
            <Input
                text='Количество товаров'
                inputType='simple input'
                type="number"
                value={form.productQuantity}
                inputName='productQuantity'
                onChange={handleInputChange}/>
            <Input
                text='Комментарий'
                inputType='textarea'
                type="text"
                value={form.comment}
                inputName='comment'
                onChange={handleInputChange}/>
            <Select
                onChange={handleSelectChange}
                value={form.shooting_type}
                shooting_type={SHOOTING_TYPES}/>
           <Button
           text="Отправить"/>
        </form>
    )
}

export default Form