import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="">
            <Container >
                <Navbar.Brand href="#home">Biblioteca Mitica</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                    <Nav className="mx-auto my-3">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Griego</Nav.Link>
                        <Nav.Link href="#link">Nordico</Nav.Link>
                        <Nav.Link href="#link">Egipcio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
