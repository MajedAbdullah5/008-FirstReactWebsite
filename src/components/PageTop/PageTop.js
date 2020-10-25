import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pageTop p-0" fluid={true}>
                    <div className="pageTopOverlay">
                        <Container className="pageTopContent">
                            <Row>
                                <Col className="text-center" sm={12} lg={12} md={12}>
                                    <h4 className="pageContentText">{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;