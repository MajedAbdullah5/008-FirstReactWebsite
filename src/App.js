import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";
import RefundPolicy from "./components/RefundPolicy/RefundPolicy";
import RefundPage from "./pages/RefundPage";



class App extends Component {
    render() {
        return (
           <BrowserRouter>
                <AppRoute/>
           </BrowserRouter>
        );
    }
}

export default App;