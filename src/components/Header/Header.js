import "./Header.css";
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../img/phero-logo.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faHouse, faUser, faEarthAsia } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    
    const {getSearch, handleChange, input} = props;
    return (
        <div>
            <Navbar className="nav-bar" expand="lg">
            <Container>
                <Link to="/">
                    <Navbar.Brand ><img src={Logo} alt="logo" /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto me-2 my-2 my-lg-0 nav"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                   <Link className="nav-items" to="/"> 
                    <FontAwesomeIcon className="me-1" icon={faHouse} />
                    Home
                   </Link>
                   <Link className="nav-items" to="/friends">
                     <FontAwesomeIcon className="me-2" icon={faUser} />
                       Friend List
                    </Link>
                   <Link className="nav-items" to="/countries">
                     <FontAwesomeIcon className="me-2" icon={faEarthAsia} />
                       Countries
                    </Link>
                   
                   <Link className="nav-items" to="/about">
                       <FontAwesomeIcon className="me-2" icon={faAddressBook} />

                       About Us</Link>
                </Nav>
                <Form className="d-flex align-items-center">
                    <FormControl
                    type="search"
                    placeholder="Search Your Desired Food"
                    value={input}
                    className="me-1"
                    aria-label="Search"
                    onChange={handleChange}
                    />
                    <Link to="./meals">
                        <button onClick ={() => getSearch(input)} className="search-btn">Search</button>
                    </Link>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;