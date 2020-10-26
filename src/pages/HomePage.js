import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import TopBanner from "../components/BannerComponent/topBanner";
import Services from "../components/Services/services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import Projects from "../components/Recent Projects/Projects";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <Projects/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default HomePage;