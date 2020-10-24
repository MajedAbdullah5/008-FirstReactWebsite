import React from 'react';

import TopBanner from "./components/BannerComponent/topBanner";
import Services from "./components/Services/services";
import TopNavigation from "./components/topNavigation/topNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import Projects from "./components/Recent Projects/Projects";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/Video";
import ClientReview from "./components/ClientReview/ClientReview";
import Footer from "./components/FooterSection/Footer";
import Copyright from "./components/Copyright/Copyright";



//App.js is the main page of the website. All the components will be loaded accordingly from this page
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
