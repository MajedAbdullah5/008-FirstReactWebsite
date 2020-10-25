import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="MY COURSES"/>
                <AllCourses/>
                <Footer/>
                <Copyright/>
            </Fragment>
        );
    }
}

export default CoursesPage;