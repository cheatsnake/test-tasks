import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import '../styles/loginPage.scss';

const LoginPage = () => {

    const userData = useSelector(state => state.loginReducer.user);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    function onLogin(e) {
        setLogin(e.target.value);
    }

    function onPassword(e) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="login">Login</label>
                <input 
                    type="text" 
                    name="login" 
                    value={login} 
                    onChange={onLogin}
                    maxLength="20"
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={onPassword}
                    maxLength="20"
                />
                {
                    login === userData.login && password === userData.password ?
                        <button className="btn" type="submit">Submit</button> :
                        <button className="btn" disabled type="submit">Submit</button>
                }
            </form>
        </div>
    );
};

export default LoginPage;