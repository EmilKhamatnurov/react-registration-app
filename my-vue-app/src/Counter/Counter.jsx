import React from 'react'
import './Counter.css'
function Counter({ value, isDanger }) {
    return (
        <p className={isDanger ? 'counter counter_danger' : 'counter '}>
            {value}
        </p>
    )
}
export default Counter;