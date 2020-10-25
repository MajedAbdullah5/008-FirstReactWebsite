import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";
import Services from "../components/Services/services";
import ContactSection from "../components/ContactSection/ContactSection";
import PageTop from "../components/PageTop/PageTop";

 class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="MY SERVICES"/>
                <Services/>
                <ContactSection/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default ServicesPage;