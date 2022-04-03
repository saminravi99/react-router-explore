import React, { useEffect, useState } from 'react';
import {Button, Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./FriendDetail.css"

const FriendDetail = () => {

    const [detail, setDetail] = useState({})

    const params = useParams();

    const [loading,  setLoading] = useState(true);

    const {name, email, website, address} = detail

    
    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then(json => {setDetail(json)
        setLoading(false)
        })
    }  , [params.id])
    return (
        <div>
            { loading ?
             <div className="d-flex justify-content-center align-items-center spinner">
                   <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button>

                </div>
            :
            <div className="d-flex justify-content-center align-items-center detail-container">
            <Card style={{ width: '20rem' }} >
                <div className="detail-image-container">
                    <div style={{display: loading ? 'block' : 'none'}} className="detail-spinner-container">
                         <div  className="d-flex justify-content-center align-items-center detail-spinner">

                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>

                        </div>
                    </div>
            

                    <div style={{display: loading ? 'none' : 'block'}}>
                        <Card.Img className="img-fluid px-5 pt-5" variant="top" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
                    </div>
                </div>
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
            }
        </div>
    );
};

export default FriendDetail;