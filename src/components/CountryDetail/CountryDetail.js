import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {

    const {name} = useParams();

    const [country, setCountry] = useState({});

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => response.json())
            .then(data => { setCountry(data[0]) }
            )   
    }, [name])
    return (
        <div className="p-5">
            <img src={country.flags?.png} alt="" />
            <h1 className="text-center">{country.name?.common}</h1>
        </div>
    );
};

export default CountryDetail;