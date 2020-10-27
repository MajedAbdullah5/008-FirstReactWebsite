import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";
import AboutMe from "../components/About/AboutMe";


class AboutPages extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="ABOUT ME"/>
                <AboutMe/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default AboutPages;