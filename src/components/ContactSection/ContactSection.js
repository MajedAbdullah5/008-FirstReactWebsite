import React, {Component, Fragment} from 'react';
import  {Container, Row, Col, Form,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationArrow, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">

                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="footerHeader">QUICK CONNECT</h1><br/>
                            <hr className="headerHoriz"/>
                            <Form>
                                <Form.Group >
                                    <Form.Label className="service-description">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className="service-description">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="service-description">Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="4" placeholder="Enter Your Message" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col lg={6} md={6} sm={12} className="mt-3">
                            <h1 className="footerHeader">DISCUSS NOW</h1><br/>
                            <hr className="headerHoriz"/>
                            <FontAwesomeIcon icon={faLocationArrow}/> North Alipur, Word No 5, Dagonbhuiyan,Feni<br/>
                            <FontAwesomeIcon icon={faPhone}/> 01890312202<br/>
                            <FontAwesomeIcon icon={faEnvelope}/> Majedabdullah635@gmail.com <br/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;