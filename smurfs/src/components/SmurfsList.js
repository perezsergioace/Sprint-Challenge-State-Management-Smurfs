import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurfs from './Smurfs';

const SmurfsList = () => {
    const { smurfs, deleteSmurf } = useContext(SmurfContext);

    return (
        <div>
            {smurfs && smurfs.map(smurf => <Smurfs key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf} />)}
        </div>
    )
}

export default SmurfsList;