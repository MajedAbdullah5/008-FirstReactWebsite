import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {faFacebookF,faYoutube,faDashcube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone,faLocationArrow,faUser,faHandPaper} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <Fragment>
               <Container fluid={true} className="text-center countSection ml-5">
                   <Row>
                       <Col className="text-justify p-2" lg={3} md={6} sm={12}>
                           <h1 className="footerHeader">FOLLOW ME</h1><br/>
                           <hr className="headerHoriz"/>
                           <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebookF}/> Facebook</a><br/>
                           <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube}/> Youtube</a>
                       </Col>
                       <Col className="text-left p-2" lg={3} md={6} sm={12}>
                           <h1 className="footerHeader">ADDRESS</h1><br/>
                           <hr className="headerHoriz"/>
                            <FontAwesomeIcon icon={faLocationArrow}/> North Alipur, Word No 5, Dagonbhuiyan,Feni<br/>
                            <FontAwesomeIcon icon={faPhone}/> 01890312202<br/>
                            <FontAwesomeIcon icon={faEnvelope}/> Majedabdullah635@gmail.com
                       </Col>
                       <Col className="text-justify p-2" lg={3} md={6} sm={12}>
                           <h1 className="footerHeader">INFORMATION</h1><br/>
                           <hr className="headerHoriz"/>
                           <a className="footerContent" href=""><FontAwesomeIcon icon={faUser}/> About Me</a><br/>
                           <a className="footerContent" href=""><FontAwesomeIcon icon={faHandPaper}/> My Resume</a><br/>
                           <a className="footerContent" href=""><FontAwesomeIcon icon={faPhone}/> Contact Me</a>
                       </Col>
                       <Col className="text-justify p-2" lg={3} md={6} sm={12}>
                           <h1 className="footerHeader">LEGAL</h1><br/>
                           <hr className="headerHoriz"/>
                           <a className="footerContent" href=""><FontAwesomeIcon icon={faDashcube}/> Refund Policy</a><br/>
                           <a className="footerContent" href=""><FontAwesomeIcon icon={faDashcube}/> Terms and Condition</a><br/>
                           <a className="footerContent" href=""><FontAwesomeIcon icon={faDashcube}/> Privacy Policy</a>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default Footer;