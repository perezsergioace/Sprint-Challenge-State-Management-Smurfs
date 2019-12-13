import React from 'react';

const Smurfs = (props) => {
    // console.log('From Smurfs.js',props);
    return (
        <div>
            <h1>Name: {props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</button>
        </div>
    )
}

export default Smurfs;