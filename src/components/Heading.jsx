import React from "react";
import { createUseStyles } from 'react-jss';

const headingStyles = createUseStyles(
    {
        'site-heading': {
            color: '#FFF',
            'font-family': 'Fira Code',
            'font-size': '32px',
            'font-style': 'normal',
            'font-weight': '700',
            'line-height': 'normal',
        }
    }
);


function Heading({text}) {
    const classes = headingStyles();
    return(
        <h1 className={classes['site-heading']}>{text}</h1>
    )
}

export default Heading;