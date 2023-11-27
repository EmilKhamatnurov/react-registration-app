import React from "react";
import { createUseStyles } from 'react-jss';

const containerStyles = createUseStyles(
    {
        container: props => ({
            margin: "0 auto",
            display: "flex",
            flexDirection: props.direction,
            maxWidth: props.width,
        })
    }
);

function Container({children, ...props}) {
    const classes = containerStyles(props)
    return(
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default Container;