import React from 'react';
import './Country.css'

const Country = props => {
    // console.log(props);
    const { name, flag, capital, area, population } = props.country;
    return (
        <div className='country'>
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <img src={flag} alt="" />
            <p><small>Area:{area}</small></p>
            <p><small>Population:{population}</small></p>
        </div>
    );
};

export default Country;