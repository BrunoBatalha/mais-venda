import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Register from './Register';
import Dashboard from './Dashboard';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/register' exact component={Dashboard} />
            <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));


