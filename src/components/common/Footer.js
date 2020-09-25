import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return(
        <div className="bg-dark">
            <Container className="text-center text-light py-3">
                <p>&copy; 2020 - Todos los derechos reservados - Biblioteca mitica </p>
            </Container>
        </div>
    )
}
export default Footer;