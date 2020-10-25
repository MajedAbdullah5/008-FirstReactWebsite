import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProjects from "../components/All Projects/AllProjects";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="MY PROJECTS"/>
                <AllProjects/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default Projects;