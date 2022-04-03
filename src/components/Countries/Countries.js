import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import EachCountry from '../EachCountry/EachCountry';
import "./Countries.css"

const Countries = () => {
     const [countries, setCountries] = useState([]);

            useEffect(() => {
                fetch("https://restcountries.com/v3.1/all")
                    .then(response => response.json())
                    .then(data => { setCountries(data) }
                    )
            }
                , [])

        const eachCountry = countries.map((country, index) => {
            return (
                <EachCountry    key={country.ccn3}
                                    {...country}
                />
            )
        })

    return (
       <div>
            
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        {eachCountry}
                    </div>
                </div>
                
                <div className="col-4">
                    <div className="b mt-5  outlet">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>



       </div>
    );
};

export default Countries;