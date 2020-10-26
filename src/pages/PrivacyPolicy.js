import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/services";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";
import Privacy from "../components/PrivacyPolicy/Privacy";

class PrivacyPolicy extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <div>
                <TopNavigation/>
                <PageTop pageTitle="PRIVACY POLICY"/>
                <Privacy/>
                <Footer/>
                <Copyright/>
            </div>
        );
    }
}

export default PrivacyPolicy;