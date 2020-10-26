import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="REFUND POLICY"/>
                <RefundPolicy/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default RefundPage;