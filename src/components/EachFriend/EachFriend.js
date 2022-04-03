import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./EachFriend.css"

const EachFriend = (props) => {
    let navigate = useNavigate();

    const {name, username, id} = props

    const [loading, setLoading] = useState(true);

    console.log(loading)

    const imgLoad = () => {
        setLoading((loading) => !loading)
    }

       const showDetails = () => {
        let path = `/friends/${id}`;
        navigate(path)
    }

    const imgURL = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    return (
        <div className="friend text-center">
            
                <div className="each-image-container">
                    <div style={{display: loading ? 'block' : 'none'}} className="spinner-container">
                         <div  className="d-flex justify-content-center align-items-center each-spinner">

                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>

                        </div>
                    </div>
            

                    <div style={{display: loading ? 'none' : 'block'}}>
                        <img   className="w-50" src={imgURL} onLoad={imgLoad} alt="logo" />
                    </div>
                </div>

            
            <h5>{name}</h5>
            <h6>User Name: {username}</h6>
            
            <button onClick={showDetails} className="detail-btn">
                View Detail
            </button>
                
        </div>
    );
};

export default EachFriend;