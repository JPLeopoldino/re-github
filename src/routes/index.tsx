import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import SingIn from '../screens/SignIn';
import Home from '../screens/Home';

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={SingIn} />
                <Route path="/home" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Router;
