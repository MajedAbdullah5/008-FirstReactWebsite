import React, {Component, Fragment} from 'react';
import  {Modal,Button, Col, Container, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "video-react/dist/video-react.css";
import {Player,BigPlayButton} from "video-react";

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }
    onOpen =()=>this.setState({show: true})
    onClose=()=>this.setState({show:false})

    render() {
        return (
            <Fragment>
                <Container className="text-center text-justify">
                    <Row>
                    <Col lg={12} md={12} sm={12} className="videoCard">
                        <h6 className="howIDo-main-title">HOW I DO</h6>
                        <div>
                            <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis cum cumque distinctio harum iusto magnam maiores minus non pariatur perspiciatis provident quis tempore tenetur unde. Ab eligendi ex illum labore quaerat qui quia. Delectus dolorem eos ipsa magni! Adipisci esse fugiat impedit labore nam nisi perferendis ratione saepe soluta?</p>
                            <a className="p-2" onClick={this.onOpen}><FontAwesomeIcon style={{fontSize:'50px', color:'#974a48'}} icon={faPlayCircle}/> </a>
                        </div>
                    </Col>
                </Row>
                </Container>


                <Modal size="lg" show={this.state.show} onHide={this.onClose}>
                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{backgroundColor:"#974a48"}} variant="secondary" onClick={this.onClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;