import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CoursesPage from "../pages/CoursesPage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import AboutPages from "../pages/AboutPages";



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
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;