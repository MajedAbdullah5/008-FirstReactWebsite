import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";
import TermsDes from "../components/Terms&Condition/TermsDes";

class TermsConditions extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <div>
                <TopNavigation/>
                <PageTop pageTitle="TERMS & CONDITIONS"/>
                <TermsDes/>
                <Footer/>
                <Copyright/>
            </div>
        );
    }
}

export default TermsConditions;