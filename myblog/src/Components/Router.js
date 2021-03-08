import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Header from "./Header";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Profile from "../Routes/Profile";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/profile" component={Profile} />
                    <Redirect from="*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;