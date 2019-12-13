import React, { useState, useContext } from 'react';
import {SmurfContext } from '../contexts/SmurfContext';

const SmurfsForm = () => {
    const [ newSmurf, setNewSmurf ] = useState({
        name: '',
        age: '',
        height: ''
    });

    const { addSmurfs } = useContext(SmurfContext);

    const handleChanges = event => {
        setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        addSmurfs(newSmurf);
    };

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <input type='text' name='name' placeholder='name' value={newSmurf.name} onChange={event => handleChanges(event)} />
                <input type='number' name='age' placeholder='age' value={newSmurf.age} onChange={event => handleChanges(event)} />
                <input type='number' name='height' placeholder='height' value={newSmurf.height} onChange={event => handleChanges(event)} />
                <button>Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfsForm;