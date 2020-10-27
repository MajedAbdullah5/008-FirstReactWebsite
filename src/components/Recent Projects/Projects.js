import React, {Component, Fragment} from 'react';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="countSection text-center">
                    <h1 className="service-main-title">RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/storage/react.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to="/project-details"><Button variant="primary" style={{backgroundColor:'#974a48', border:'#974a48'}}>Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/storage/react.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to="/project-details"><Button variant="primary" style={{backgroundColor:'#974a48', border:'#974a48'}}>Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/storage/react.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to="/project-details"><Button variant="primary" style={{backgroundColor:'#974a48', border:'#974a48'}}>Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Projects;