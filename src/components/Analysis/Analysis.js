import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import  {ResponsiveContainer,XAxis,Tooltip,Bar,BarChart} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {Technology: 'Java',        Project: 100},
                {Technology: 'Kotlin',      Project: 60},
                {Technology: 'Python',      Project: 40},
                {Technology: 'JQuery',      Project: 80},
                {Technology: 'Bootstrap',   Project: 30},
                {Technology: 'ReactJs',     Project: 90},
            ]
        }
    }

    render() {
        let red = "#974a48";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="service-main-title">TECHNOLOGY USED</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis datakey="Technology"></XAxis>
                                <Tooltip/>
                                <Bar dataKey="Project" fill={red}></Bar>
                            </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio inventore labore
                                nisi, officiis optio quibusdam sapiente sed tempora tempore, ullam veniam voluptate.
                                Accusantium ad aliquid asperiores corporis cumque error excepturi facere harum ipsa
                                libero modi mollitia nihil nulla officia perferendis placeat porro, praesentium quam qui
                                quidem quis quos, repudiandae suscipit temporibus totam vel veritatis voluptates!
                                Accusamus architecto asperiores assumenda autem consectetur consequatur cum, doloremque
                                doloribus explicabo harum illum impedit iste labore laborum magni maiores, minima
                                molestiae obcaecati quaerat quasi rem repellat repellendus sed similique soluta suscipit
                                ut voluptate? Beatae commodi consectetur cupiditate delectus eum expedita natus nobis
                                quasi quisquam voluptate.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;