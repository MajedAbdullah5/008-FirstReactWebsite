import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";
import About from "../components/About/About";

class AboutPages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="ABOUT ME"/>
                <About/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default AboutPages;