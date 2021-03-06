import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = ( props ) => {
    const style = {
        '@media (max-width: 800px)': {
            width: '150px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(person);
