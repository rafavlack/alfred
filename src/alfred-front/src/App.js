import './App.css';
import React, {Component} from "react";
import Navigation_Bar from "./components/Navigation_Bar";
import Footer_App from "./components/Footer_App";



class App extends Component{
    render() {
        return (
            <>
                <Navigation_Bar />
                <Footer_App />
            </>
        );
    }
}

export default App;
