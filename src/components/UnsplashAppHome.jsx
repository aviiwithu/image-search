import React from 'react'
import {BrowserRouter as Router,Route, Switch, NavLink} from 'react-router-dom';
import UnsplashApp from './UnsplashApp';
import UnsplashView from './UnsplashView';
import UnsplashImage from './UnsplashImage'


function UnsplashAppHome() {
    return (
        <div>
            <Router>
            <Switch>
                <Route exact path="/" component={UnsplashApp} />
                <Route exact path="/view/:id" component={UnsplashView} />
            </Switch>
            </Router>
            
        </div>
    )
}

export default UnsplashAppHome
