import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
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
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h1 className="projectCardTitle">Foll Bazar</h1>
                        <h4 className="projectCardTitle">Complete e-commerce app solution for selling online fruit.</h4>
                        <ul>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <li className="projectCardDesc text-justify p-1">Lorem ipsum dolor sit amet.</li>
                            <Link><Button variant="primary" to="/project-details">Live Preview</Button></Link>
                        </ul>
                    </Col>

                </Row>
            </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;