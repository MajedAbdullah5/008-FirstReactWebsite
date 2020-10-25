import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import React, {Component, Fragment} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import redLogo from '../../asset/image/hacker.svg'
import whiteLogo from '../../asset/image/hacker (1).svg'

class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navBackground : "navBackgroundColor",
            navBarTitle   : "navTitle",
            navLogo       : [whiteLogo],
            navVariant    : 'dark',
            navBarItem    :"navItem"
        }
    }

    onscroll = () => {
        if (window.scrollY > 100) {
            this.setState({navBarTitle: 'navTitleScroll',navLogo:[redLogo], navBackground:'navBackgroundScrollColor',navBarItem:"navItemScroll",navVariant:"light"})
        } else if (window.scrollY < 100) {
            this.setState({navBarTitle: 'navTitle',navLogo:[whiteLogo], navBackground : 'navBackgroundColor',navBarItem:"navItem",navVariant:"dark"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onscroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBackground} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><img className="logo" src={this.state.navLogo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem}  href="/">Home</Nav.Link>
                            <Nav.Link className={this.state.navBarItem}  href="/service">Services</Nav.Link>
                            <Nav.Link className={this.state.navBarItem}  href="/courses">Courses</Nav.Link>
                            <Nav.Link className={this.state.navBarItem}  href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link className={this.state.navBarItem}  href="/contact">Contact</Nav.Link>
                            <Nav.Link className={this.state.navBarItem}  href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>

        );
    }
}

export default TopNavigation;