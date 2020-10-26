import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import "video-react/dist/video-react.css";
import {Player,BigPlayButton} from "video-react";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="CourseDetailsTop p-0" fluid={true}>
                    <div className="CourseDetailsOverlay">
                        <Container className="pageTopContent">
                            <Row>
                                <Col sm={12} lg={6} md={6}>
                                    <h2 className="CourseDetailsTitle text-justify">FULL DYNAMIC WEBSITE WITH ADMIN PANEL</h2>
                                    <h4 className="service-description text-justify">TOTAL LECTURE = 30</h4>
                                    <h4 className="service-description text-justify">TOTAL STUDENT = 30</h4>
                                </Col>
                                <Col sm={12} lg={6} md={6}>
                                    <p className="text-justify CourseDetailsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut consequatur ducimus eligendi expedita facere facilis nulla. Amet et nam voluptatibus. Aliquid, aspernatur cumque distinctio ducimus facere magni non officia officiis quibusdam ullam? Beatae corporis debitis delectus dicta dolorem doloremque doloribus excepturi facere id incidunt ipsam, laborum maiores nostrum temporibus!</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="pageTopContent">
                   <Row>
                       <Col>
                           <h1 className="CourseDetailsSkillsTitle">SKILLS YOU GET</h1>
                           <ul>
                               <li className="CourseDetailsSkillsDesc text-justify">Lorem ipsum dolor sit amet, consectetur.</li>
                               <li className="CourseDetailsSkillsDesc text-justify">Lorem ipsum dolor sit amet, consectetur.</li>
                               <li className="CourseDetailsSkillsDesc text-justify">Lorem ipsum dolor sit amet, consectetur.</li>
                               <li className="CourseDetailsSkillsDesc text-justify">Lorem ipsum dolor sit amet, consectetur.</li>
                               <li className="CourseDetailsSkillsDesc text-justify">Lorem ipsum dolor sit amet, consectetur.</li>
                           </ul>
                           <Button variant="primary">Buy Now</Button>
                       </Col>
                       <Col>
                           <Player  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <BigPlayButton position="center"/>
                           </Player>
                       </Col>
                   </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;