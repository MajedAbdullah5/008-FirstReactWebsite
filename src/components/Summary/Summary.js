import React, {Component, Fragment} from 'react';
import  {Container, Row, Col,Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {

    render() {
        return (
            <Fragment>
                <Container className="summary p-0 text-center" fluid={true}>
                    <div className="summaryOverlay">
                        <Row>
                            <Col lg={8} md={4} sm={12}>
                                <Row className="countSection">
                                    <Col>
                                        <h1 className="countingNumber">
                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>

                                                )}
                                            </CountUp>
                                        </h1>
                                        <h4 className="countingTitle">TOTAL PROJECTS</h4>
                                        <hr className="bg-white w-25"/>
                                    </Col>
                                    <Col>
                                        <h1 className="countingNumber">
                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>

                                                )}
                                            </CountUp>
                                        </h1>
                                        <h4 className="countingTitle">TOTAL CLIENTS</h4>
                                        <hr className="bg-white w-25"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card style={{ width: '18rem' }} className="cardMargin">
                                    <Card.Body>
                                        <Card.Title className="cardTitle">HOW I WORK</Card.Title>
                                        <Card.Text>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconColor" icon={faCheckCircle}/> Requirements Gathering</p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconColor" icon={faCheckCircle}/> System Analysis</p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconColor" icon={faCheckCircle}/> Coding Testing</p>
                                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconColor" icon={faCheckCircle}/> Implementation</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;