import React from 'react';
import { Link } from 'react-router-dom';

const EachCountry = (props) => {
    const {name} = props;
    return (
            <div className="col-4 p-3 ">
                <Link to={`/countries/${name.common}`}>
                    <div className="p-2 border border-primary rounded h-100">
                        <h5 className="text-center">{name.common}</h5>
                    </div>
                </Link>

            </div>

    );
};

export default EachCountry;