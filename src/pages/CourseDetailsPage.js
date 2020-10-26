import React, {Component} from 'react';
import TopNavigation from "../components/topNavigation/topNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/FooterSection/Footer";
import Copyright from "../components/Copyright/Copyright";

class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <div>
                <TopNavigation/>
                <CourseDetails/>
                <Footer/>
                <Copyright/>
            </div>
        );
    }
}

export default CourseDetailsPage;