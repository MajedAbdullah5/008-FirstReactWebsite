import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/cjs/Container";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center countSection">
                    <Row className="m-2">
                        <Col className="m-1" sm={12} md={12} lg={5}>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src="https://rabbil.com/storage/react.jpg" alt="" style={{width: '100%'}}/>
                                </Col>
                                <Col  sm={12} md={6} lg={6}>
                                    <h4 className="text-justify">title</h4>
                                    <h6 className="text-justify">Description</h6>
                                    <Link to="/course-details" style={{color:'#974a48',fontWeight:'500',fontSize:'20px'}}>Details</Link>

                                </Col>
                            </Row>
                        </Col>
                        <Col className="m-1" sm={12} md={12} lg={5}>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src="https://rabbil.com/storage/react.jpg" alt="" style={{width: '100%'}}/>
                                </Col>
                                <Col  sm={12} md={6} lg={6}>
                                    <h4 className="text-justify">title</h4>
                                    <h6 className="text-justify">Description</h6>
                                    <Link to="/course-details" style={{color:'#974a48',fontWeight:'500',fontSize:'20px'}}>Details</Link>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-2">
                        <Col className="m-1" sm={12} md={12} lg={5}>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src="https://rabbil.com/storage/react.jpg" alt="" style={{width: '100%'}}/>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <h4 className="text-justify">title</h4>
                                    <h6 className="text-justify">Description</h6>
                                    <Link to="/course-details" style={{color:'#974a48',fontWeight:'500',fontSize:'20px'}}>Details</Link>

                                </Col>
                            </Row>
                        </Col>
                        <Col className="m-1" sm={12} md={12} lg={5}>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src="https://rabbil.com/storage/react.jpg" alt="" style={{width: '100%'}}/>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <h4 className="text-justify">title</h4>
                                    <h6 className="text-justify">Description</h6>
                                    <Link to="/course-details" style={{color:'#974a48',fontWeight:'500',fontSize:'20px'}}>Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;