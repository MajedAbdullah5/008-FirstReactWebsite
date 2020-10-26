import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {faFacebookF,faYoutube,faDashcube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone,faLocationArrow,faUser,faHandPaper} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

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
                           <Link className="footerContent" to="/about"><FontAwesomeIcon icon={faUser}/> About Me</Link><br/>
                           <Link className="footerContent" to="/contact"><FontAwesomeIcon icon={faPhone}/> Contact Me</Link>
                       </Col>
                       <Col className="text-justify p-2" lg={3} md={6} sm={12}>
                           <h1 className="footerHeader">LEGAL</h1><br/>
                           <hr className="headerHoriz"/>
                           <Link className="footerContent" to="/policy"><FontAwesomeIcon icon={faDashcube}/> Refund Policy</Link><br/>
                           <Link className="footerContent" to="/terms"><FontAwesomeIcon  icon={faDashcube}/> Terms and Condition</Link><br/>
                           <Link className="footerContent" to="/privacy"><FontAwesomeIcon icon={faDashcube}/> Privacy Policy</Link>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default Footer;