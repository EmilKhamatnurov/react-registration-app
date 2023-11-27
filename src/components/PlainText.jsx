import React from 'react'
import { createUseStyles } from 'react-jss';

const plainTextStyles = createUseStyles({
    'instruction-text': props => ({
        fontSize: props.size, 
        color: props.color, 
        marginBottom: props.bottomIndent
    })
})

function PlainText(props) {
    const styleClasses = plainTextStyles(props);
    return(
        <p className={styleClasses['instruction-text']}>
            {props.text}
        </p>
    )
}

PlainText.defaultProps = {
    text: "Текст не задан",
    color: "white", 
    size: 14
}

export default PlainText;