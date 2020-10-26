import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CoursesPage from "../pages/CoursesPage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import AboutPages from "../pages/AboutPages";
import RefundPage from "../pages/RefundPage";
import TermsConditions from "../pages/Terms&Conditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicesPage}/>
                    <Route exact path="/courses" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={AboutPages}/>
                    <Route exact path="/policy" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsConditions}/>
                    <Route exact path="/privacy" component={PrivacyPolicy}/>
                    <Route exact path="/project-details" component={ProjectDetailsPage}/>
                    <Route exact path="/course-details" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;