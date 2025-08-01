import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  }); //using the custome hook

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6)); //using the custome hook
  // const [enteredEmail,setEnteredEmail] = useState('');
  // const [enteredPassword,setEnteredPassword] = useState('');

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  // const emailIsInvalid = //// ->> Changed now due to use of the hooks
  //   didEdit.email &&
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email);

  // const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(enteredValues.password, 6);

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));

  //   setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: false,
  //   }));
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");

    if (emailHasError || passwordHasError) {
      //so that if there is the error then it will not move further
      return;
    }
    console.log(emailValue, passwordValue);

    //also here also we should add the valdiation --> as in the case when without filling any thing the user just press the button of the Login

    //resetting after the sumbitting
    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  }

  // function handleInputBlur(identifier){
  //   setDidEdit(prevEdit => ({
  //       ...prevEdit,
  //       [identifier] : true,
  //   }));
  // }

  // // function handleEmailChange(event){
  // //   setEnteredEmail(event.target.value);
  // // }

  // // function handlePasswordChange(event){
  // //   setEnteredPassword(event.target.value);
  // // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div> */}
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* <button type="button" onClick={handleSubmit} className="button">Login</button> */}
      </p>
    </form>
  );
}
