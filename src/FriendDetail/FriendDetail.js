import React, { useEffect, useState } from 'react';
import {Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./FriendDetail.css"

const FriendDetail = () => {

    const [detail, setDetail] = useState({})

    const params = useParams();

    const {name, email, website, address} = detail

    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then(json => setDetail(json))
    }  , [params.id])
    return (
        <div className="d-flex justify-content-center align-items-center detail-container">
            <Card style={{ width: '20rem' }} >
                <Card.Img className="img-fluid px-5 pt-5" variant="top" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
                <Card.Body className="text-center">
                    <Card.Title>
                        <h2>{name}</h2>
                    </Card.Title>
                    <Card.Text>
                        <h6>Address : <span>{address?.suite}</span>, {address?.street}, <span>{address?.city}</span></h6>
                        <small>Email: {email}</small>
                    </Card.Text>
                    <a target="_blank"  rel="noreferrer" href={`https://www.${website}`}>
                        <button className="detail-btn">Portfolio</button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FriendDetail;