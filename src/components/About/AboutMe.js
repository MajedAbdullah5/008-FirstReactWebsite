import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";

class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="mb-3">
                            <h2 className="aboutColTitle mb-2">Majed Abdullah</h2>
                            <hr/>
                            <p className="aboutColDesTitle text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam asperiores at error facilis molestias nemo nostrum odio quam quo quod recusandae saepe sapiente ut voluptas. Accusantium delectus laboriosam nostrum!</p>

                        </Col><Col lg={12} md={12} sm={12} className="mb-3">
                            <h2 className="aboutColTitle mb-2">Majed Abdullah</h2>
                        <hr/>
                            <p className="aboutColDesTitle text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam asperiores at error facilis molestias nemo nostrum odio quam quo quod recusandae saepe sapiente ut voluptas. Accusantium delectus laboriosam nostrum!</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default AboutMe;