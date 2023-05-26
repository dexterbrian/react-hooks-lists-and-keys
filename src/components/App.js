import React from "react";
import TextInput from "./TextInput";

function App() {

  let isSubmitDisabled = true;
  let usernameValue;
  let passwordValue;

  const onUsernameChange = (e) => {
    usernameValue = e.target.value;
    isSubmitDisabled = false;
  };

  const onPasswordChange = (e) => {
    passwordValue = e.target.value;
    isSubmitDisabled = false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  }

  return (
    <div>
      <TextInput inputId="username-input" inputType="text" inputPlaceholder="Username" onChange={ onUsernameChange }/>
      <TextInput inputId="password-input" inputType="password" inputPlaceholder="Password" onChange={ onPasswordChange }/>
      <button id="login-button" type="submit" disabled={ isSubmitDisabled } onClick={ onSubmit }>Login</button>
    </div>
  );
}

export default App;
