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

  const inputsArry = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      label: "Your Email",
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
      label: "password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm your password",
      label: "password confirm",
    },
  ];

  // another thing you can use is the formData() method
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.value]: e.target.value });
  };

  console.log("re-render");
  return (
    <form action="POST" onSubmit={handleSubmit}>
      {inputsArry.map((input) => {
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={changeHandler}
        />;
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
