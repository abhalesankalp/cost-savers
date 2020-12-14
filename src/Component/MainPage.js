import Header from './Header';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Welcome from './Welcome';
import React, { Fragment } from "react";
import Dashboard from './DashboardComponents/Dashboard';

class MainPage extends React.Component{
    constructor(){
        super();
        this.state = {
            isWelcomePage: true
        };
        this.handler = this.handler.bind(this)
    }

    handler() {
        this.setState({
          isWelcomePage: false
        });
    }

    render(){
        return(
        <Fragment>
            <Header/>
            {this.state.isWelcomePage? <Welcome handler = {this.handler} /> : <Dashboard/>};
        </Fragment>
        )
    }
}

export default MainPage;