import React from 'react';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import './styles/app.scss';

const App = () => {
return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <Route path="/">
                    <LoginPage />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    </div>
    );
};

export default App;