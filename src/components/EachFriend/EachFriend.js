import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./EachFriend.css"

const EachFriend = (props) => {
    let navigate = useNavigate();

    const {name, username, id} = props

       const showDetails = () => {
        let path = `/friends/${id}`;
        navigate(path)
    }
    return (
        <div className="friend text-center">
            <img className="w-50" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" alt="logo" />
            <h5>{name}</h5>
            <h6>User Name: {username}</h6>
            
            <button onClick={showDetails} className="detail-btn">
                View Detail
            </button>
                
        </div>
    );
};

export default EachFriend;