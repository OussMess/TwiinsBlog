import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/home";
import Places from "./pages/places";
import Recommendations from "./pages/recommendations";
import Activities from "./pages/activities";
import NotFound from "./pages/notFound";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/places" component={Places}/>
                    <Route path="/recommendations" component={Recommendations}/>
                    <Route path="/activities" component={Activities}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
