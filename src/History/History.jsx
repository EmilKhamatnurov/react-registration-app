import React from 'react'

function History({ history, setHistory }) {
    return (
        <ul className="operation-history">
            {history.map(field => (
            <li key={field.id}>Значение счетчика: {field.count} операция {field.operation}
            " " 
            <button onClick={() => {
                setHistory(history.filter(a =>
                    a.id !== field.id))
                
            }}>Удалить</button>
            </li>
                ))}
        </ul>
    )
}
export default History;