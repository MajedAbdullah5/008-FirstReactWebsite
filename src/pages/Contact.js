import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";

class Contact extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="CONTACT ME"/>
                <ContactSection/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default Contact;