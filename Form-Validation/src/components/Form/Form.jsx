import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./form.css";

export default function Form() {
  //the start value of the state is empty
  //instate of using many use states for each input we can make these inputs in one object in one use state
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
  });

  const inputsArray = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "should be valid email",
      label: "Your Email",
      required: true,
    },
    {
      id: 3,
      name: "birthDay",
      type: "date",
      placeholder: "Username",
      label: "Birth Day",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Your password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm your password",
      errorMessage: "Password don't match",
      label: "password confirm",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form action="POST" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputsArray.map((input) => (
          <FormInput
            key={input.id}
            value={values[input.name]}
            {...input}
            onChange={changeHandler}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      <img
        src={require("../../assets/img/wallpaperflare.com_wallpaper (18).jpg")}
        alt=""
        className="background"
      />
    </div>
  );
}
