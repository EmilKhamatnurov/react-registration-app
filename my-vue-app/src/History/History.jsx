import React from 'react'

function History({ history }) {
    return (
        <ul className="operation-history">
            {history.map(field => (
            <li key={field.id}>Значение счетчика: {field.count} операция {field.operation}</li>
                ))}
        </ul>
    )
}
export default History;