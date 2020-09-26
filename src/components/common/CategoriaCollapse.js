import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const CategoriaCollapse = () => {
    return (
        <Navbar bg="light" variant="light" expand="" className="py-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-dark" />
            <Navbar.Collapse id="basic-navbar-nav" className="text-dark">
                <Nav className="mx-auto my-3">
                    <NavDropdown title="Griego">
                        <NavDropdown.Item href="#action/Griego.1">Heroe</NavDropdown.Item>
                        <NavDropdown.Item href="#action/Griego.2">Dios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/Griego.3">Titanes</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Nordico">
                        <NavDropdown.Item href="#action/Nordico.1">Heroe</NavDropdown.Item>
                        <NavDropdown.Item href="#action/Nordico.2">Dios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/Nordico.3">Titanes</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Egipcio">
                        <NavDropdown.Item href="#action/Egipcio.1">Heroe</NavDropdown.Item>
                        <NavDropdown.Item href="#action/Egipcio.2">Dios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/Egipcio.3">Titanes</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default CategoriaCollapse;