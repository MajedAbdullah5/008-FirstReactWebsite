import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <div>
                <TopNavigation/>
                <PageTop pageTitle="PROJECT DETAILS"/>
                <ProjectDetails/>
                <Footer/>
                <Copyright/>
            </div>
        );
    }
}

export default ProjectDetailsPage;