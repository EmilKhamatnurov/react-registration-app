import React from 'react'
import Container from './components/Container';
import Heading from './components/Heading';
import PlainText from './components/PlainText';
import Form from './components/Form';

function App() {
    return(
        // ДУБЛИРОВАНИЯ КЛАССОВ, КОТОРОЕ НУЖНО ИСПРАВИТЬ
        <Container
            width ={569}
            direction='column'>
            <Heading
                text='ПРЕДМЕТНАЯ СЪЕМКА'/>
            <PlainText
                text = "Введите свои данные, чтобы сформировать заявку на съемку"
                color = "#7F7F7F"
                size = "18px"
                bottomIndent="30px"
            />
            <Form/>

        </Container>
    )
}

export default App;