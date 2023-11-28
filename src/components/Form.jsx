import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import Input from './Input'
import Button from './Button';

const formStyles = createUseStyles({
    'inputs-form': {
        maxWidth: "100%",
        width: "100%",

    }
})

const SHOOTING_TYPES = {
    CATALOG_PHOTOGRAPHY: 'Каталожная съемка на белом фоне',
    STAGED_PHOTOGRAPGY: 'Имиджевая съемка. Простой реквизит',
    ARTISTIC_PHOTOGRAPHY: 'Имиджевая съемка. Сложная постановка'
}

function Form() {

    const formStyle = formStyles();
    // STATES
    const [form, setForm] = useState({
        name: '',
        number: '',
        photoQuantity: '',
        productQuantity: '',
        comment: '',
        shooting_type: SHOOTING_TYPES['CATALOG_PHOTOGRAPHY']
    })

    // FUNCTIONS
    function handleInputChange(e) {
        const {name, value} = e.target
        setForm({
            ...form, 
            [name]: value
        })
    }

    function handleSubmit() {
        alert(form.name)
    }
    // RENDER
    return (
        <form className={formStyle['inputs-form']} onSubmit={handleSubmit}>
            <Input
                text='Имя и Фамилия'
                inputType='simple input'
                type="text"
                value={form.name}
                inputName='name'
                onChange={handleInputChange}
                />
            <Input
                text='+7 (000) - 000 - 00'
                inputType='simple input'
                type="number"
                value={form.number}
                inputName='number'
                onChange={handleInputChange}
                />
            <Input
                text='Количество фото'
                inputType='simple input'
                type="number"
                value={form.photoQuantity}
                inputName='photoQuantity'
                onChange={handleInputChange}
                />
            <Input
                text='Количество товаров'
                inputType='simple input'
                type="number"
                value={form.productQuantity}
                inputName='productQuantity'
                onChange={handleInputChange}
                />
            <Input
                text='Комментарий'
                inputType='textarea'
                type="text"
                value={form.comment}
                inputName='comment'
                onChange={handleInputChange}
                />
           <Button
           text="Отправить"/>
        </form>
    )

}

export default Form