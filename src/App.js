import React from 'react';

import TopBanner from "./components/BannerComponent/topBanner";
import Services from "./components/Services/services";
import TopNavigation from "./components/topNavigation/topNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";



//App.js is the main page of the website. All the components will be loaded accordingly from this page
function App() {
  return (
    <div>
        <TopNavigation/>
        <TopBanner/>
        <Services/>
        <Analysis/>
        <Summary/>
    </div>
  );
}

export default App;
