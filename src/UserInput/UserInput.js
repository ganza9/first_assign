import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} />
            <p>Username: {props.name} </p>
      </div>
    )
};

export default userInput;