import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.entered} />
            <p>{props.paragraph}</p>
        </div>
    )
};

export default userOutput;