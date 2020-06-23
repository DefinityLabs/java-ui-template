import React, { useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function App() {
    return (
        <div id="app">
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="/">Linker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto">
                        <Nav.Link href="/components/">Components</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
