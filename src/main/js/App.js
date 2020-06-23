import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import PageRouter from "./PageRouter";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default function App() {
    return (
        <div id="app">
            <Router basename={process.env.PUBLIC_URL}>
                <Navbar bg="light" expand="md">
                    <Navbar.Brand as={Link} to="/">Java UI Template</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link}  to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <PageRouter />
            </Router>
        </div>
    );
}
