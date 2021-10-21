import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import SignIn from "./Major/Authentication/SignIn/SignIn";
import SignUp from "./Major/Authentication/SignUp/SignUp";
import Central from "./Major/Central/Central";

const App = () => {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={ Central } />
                <Route exact path='/signin' component={ SignIn } />
                <Route exact path='/signup' component={ SignUp } />
            </Switch>
        </div>
    )
};
export default App;