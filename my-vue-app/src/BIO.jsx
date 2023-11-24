import React, {useState} from 'react'

function BIO() {
    const [person, setPerson] = useState({
        name: 'Emil',
        surname: 'Khmatnurov',
        age: 23,
        sex: 'male',
        interests: ['photo', 'singing', 'programming']
    })

    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: '',
        sex: 'male',
        interests: ''
    })

    const [isError, setError] = useState(false);


// Обработчик полей ввода
function handleInputChange(e) {
    const {name, value} = e.target
    setForm({
        ...form, 
        [name]: value,
    })
}
// Обработчик кнопок
function handleSetValueBtnClick(key) {

    let value = form[key];
    if(!value) {
        setError(true)
        return
    }
    setError(false)

    if(Array.isArray(person[key])) {
        value = [...person[key], form[key]]
    }

    setPerson({
        ...person, 
        [key]: value,
    })
    
}
    return (
        <>
            {isError ? (<p>У вас ошибка в полях ввода</p>) : ''}
            <div>
                <label>Введите имя: {' '} 
                    <input 
                        type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}/> {' '}
                </label>
                <button onClick={() => {handleSetValueBtnClick('name')}}>Нажми на меня</button>

                <br />
                <label>Введите Фамилию: {' '} 
                    <input 
                        type="text" 
                        name="surname"
                        value={form.surname}
                        onChange={handleInputChange}/> {' '}
                </label>
                <button onClick={() => {handleSetValueBtnClick('surname')}}>Нажми на меня</button>
        
                <br />
                <label>Введите возраст: {' '} 
                    <input 
                        type="number" 
                        name="age"
                        value={form.age}
                        onChange={handleInputChange}/> {' '}
                </label>
                <button onClick={() => {handleSetValueBtnClick('age')}}>Нажми на меня</button>

                {/* Пол */}
                <label>Выберете пол:<input type="radio" name="sex" value="male" 
                        checked={form.sex === 'male'} onChange={handleInputChange}/> Мужчина</label>
                <label><input type="radio" name="sex" value="female" 
                        checked={form.sex === 'female'} onChange={handleInputChange} /> Женщина</label>
                <button onClick={() => {handleSetValueBtnClick('sex')}}>Задать пол</button>

                {/* Интересы человека */} 
                <label>Введите новый интерес: {' '}  
                    <input 
                        type="text" 
                        name="interests"
                        value={form.interests}
                        onChange={handleInputChange}/> {' '}
                </label>
                <button onClick={() => {handleSetValueBtnClick('interests')}}>Нажми на меня</button>

                <p>{person.name}</p>
                <p>{person.surname}</p>
                <p>{person.sex === 'male' ? "Мужчина" : "Женщина"}</p>
                <p>{person.age} годиков</p>
                <p>Интересы</p>
                <div>
                    {person.interests.map((interest, index) => (
                        <p key={index}>{interest}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BIO