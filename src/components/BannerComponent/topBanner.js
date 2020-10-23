import React, {Component, Fragment} from 'react';

import {Container,Row,Col,Button} from "react-bootstrap";


class TopBanner extends Component {
    render() {
        return (
          <Fragment>
              <Container className="topFixedBanner p-0" fluid={true}>
                  <div className="topBannerOverlay">
                      <Container className="bannerComponent">
                        <Row>
                            <Col className="text-center" sm={12} lg={12} md={12}>
                               <h1 className="bannerTitle">SOFTWARE ENGINEERING</h1>
                                <h4 className="bannerSubTitle">Mobile & Web Application</h4>
                                <Button varient="primary">Learn More</Button>
                            </Col>
                        </Row>
                      </Container>
                  </div>
              </Container>
          </Fragment>
        );
    }
}

export default TopBanner;