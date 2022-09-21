import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Lets Explore the world!</h1>
            <h3>Total Countries: {countries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.name}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries; <h1>I am sorry the world is closed today!</h1>