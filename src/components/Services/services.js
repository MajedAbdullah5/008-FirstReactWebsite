import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/custom.css'
import webDesign from  '../../asset/image/web-design.svg';
import laptop from  '../../asset/image/laptop.svg';
import coding from  '../../asset/image/coding.svg';
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="service-main-title">MY SERVICES</h1>
                    <Row className="text-center">
                        <Col lg={4} md={6} sm={12}>
                            <div className="card card-component">
                                <img className="iconSize"  src={webDesign} alt=""/>
                              <h2 className="service-name">Web Trainer</h2>
                               <p className="service-description">Teaching is my passion, If you ask my best hobbies and teaching is number one. Teaching is the best way of acquiring knowledge </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="card card-component">
                                <img className="iconSize" src={laptop} alt=""/>
                                <h2 className="service-name">Web Development</h2>
                                <p className="service-description">I build web application for your business and Institution as per as requirements.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="card card-component">
                                <img className="iconSize" src={coding} alt=""/>
                                <h2 className="service-name">Mobile Development</h2>
                                <p className="service-description">I build native and cross platform mobile app for your business and Institution as per as requirements.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;