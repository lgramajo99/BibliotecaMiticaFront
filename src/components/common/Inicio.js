import React from "react";
import { Card, Container, CardDeck, Row, Col } from "react-bootstrap";
import logo1 from "../images/logo192.png";
import CategoriaCollapse from "./CategoriaCollapse";
import LadoPublicidad from "./LadoPublicidad";

function Inicio() {
    return (
        <Container fluid>
            <Row className="my-4">
                <Col lg="2">
                   <CategoriaCollapse></CategoriaCollapse>
                </Col>
                <Col sm="12" lg="7">
                    <CardDeck className="mb-2">
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <CardDeck className="mb-2">
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <CardDeck className="mb-2">
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>
                                    Some quick example Title to build on the card title and make
                                    up the bulk of the card's content.
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
                <Col lg="3">
                    <LadoPublicidad></LadoPublicidad>
                </Col>
            </Row>
        </Container>
    );
}

export default Inicio;
