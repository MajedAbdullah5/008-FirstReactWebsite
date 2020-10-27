import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  {Container,Col,Row} from "react-bootstrap";


class ClientReview extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            autoplaySpeed: 3000,
            autoPlay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center text-justify">
                    <h1 className="service-main-title">CLIENT SAYS</h1>
                    <Slider {...settings}>
                     <div>
                         <Row className="text-center">
                             <Col lg={12} md={12} sm={12}>
                                 <img className="circleImage" src="https://images.theconversation.com/files/350871/original/file-20200803-22-asg25h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=503&fit=crop&dpr=1" alt=""/>
                                 <h1 className="reviewTitle">Web Development</h1>
                                 <p className="reviewDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis excepturi ipsa non numquam pariatur sed tempora vitae! Aliquam doloremque harum hic in modi odio odit, unde voluptatum? Cumque, inventore, numquam! A aliquid amet aperiam delectus, deleniti eos ipsum iure magnam maiores nemo porro, quidem sint unde vero voluptatem? Ullam!</p>
                             </Col>
                         </Row>
                     </div>
                        <div>
                            <Row className="text-center">
                                <Col lg={12} md={12} sm={12}>
                                    <img className="circleImage" src="https://images.theconversation.com/files/350871/original/file-20200803-22-asg25h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=503&fit=crop&dpr=1" alt=""/>
                                    <h1 className="reviewTitle">Web Development</h1>
                                    <p className="reviewDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis excepturi ipsa non numquam pariatur sed tempora vitae! Aliquam doloremque harum hic in modi odio odit, unde voluptatum? Cumque, inventore, numquam! A aliquid amet aperiam delectus, deleniti eos ipsum iure magnam maiores nemo porro, quidem sint unde vero voluptatem? Ullam!</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center">
                                <Col lg={12} md={12} sm={12}>
                                    <img className="circleImage" src="https://images.theconversation.com/files/350871/original/file-20200803-22-asg25h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=503&fit=crop&dpr=1" alt=""/>
                                    <h1 className="reviewTitle">Web Development</h1>
                                    <p className="reviewDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis excepturi ipsa non numquam pariatur sed tempora vitae! Aliquam doloremque harum hic in modi odio odit, unde voluptatum? Cumque, inventore, numquam! A aliquid amet aperiam delectus, deleniti eos ipsum iure magnam maiores nemo porro, quidem sint unde vero voluptatem? Ullam!</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center">
                                <Col lg={12} md={12} sm={12}>
                                    <img className="circleImage" src="https://images.theconversation.com/files/350871/original/file-20200803-22-asg25h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=503&fit=crop&dpr=1" alt=""/>
                                    <h1 className="reviewTitle">Web Development</h1>
                                    <p className="reviewDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis excepturi ipsa non numquam pariatur sed tempora vitae! Aliquam doloremque harum hic in modi odio odit, unde voluptatum? Cumque, inventore, numquam! A aliquid amet aperiam delectus, deleniti eos ipsum iure magnam maiores nemo porro, quidem sint unde vero voluptatem? Ullam!</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>

            </Fragment>
        );
    }
}

export default ClientReview;