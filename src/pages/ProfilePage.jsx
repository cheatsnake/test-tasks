import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profilePage.scss';

const ProfilePage = (props) => {

    const userData = useSelector(state => state.loginReducer.user);

    return <h1>Hello {userData.login}!</h1>
};

export default ProfilePage;