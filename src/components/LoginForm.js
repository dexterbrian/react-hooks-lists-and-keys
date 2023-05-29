import React, { useState } from 'react';

function LoginForm() {
    
    const [ isSubmitDisabled, setSubmitDisabled ] = useState(false);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const onUsernameChange = (e) => {

        setUsername(e.target.value);
        setSubmitDisabled(e.target.value !== '' && password !== '');
    };

    const onPasswordChange = (e) => {

        setPassword(e.target.value);
        setSubmitDisabled(e.target.value !== '' && username !== '');
    };

    const onLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }

    return (
        <form onSubmit={ onLogin }>
        <input id="username-input" type="text" placeholder="Username" onChange={ onUsernameChange } value={ username }/>
        <input id="password-input" type="password" placeholder="Password" onChange={ onPasswordChange } value={ password }/>
        <button id="login-button" type="submit" disabled={ !isSubmitDisabled }>Login</button>
        </form>
    );
}

export default LoginForm;