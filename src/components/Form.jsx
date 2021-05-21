import React, { Component } from "react";
import Button from "./Button";
import Joi from "joi";

import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  schemaObj = {
    firstname: Joi.string().min(3).max(255).required().label("First Name"),
    lastname: Joi.string().min(3).max(255).required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(3)
      .max(255)
      .required()
      .label("Email Address"),
    password: Joi.string().min(3).max(255).required().label("Password"),
  };
  schema = Joi.object().keys(this.schemaObj);

  handleChange = ({ target: input }) => {
    const name = input.name;
    const value = input.value;
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors ? errors : {} });
    if (errors) return;

    //TODO:
    this.doSubmit();
  };

  doSubmit = () => {
    alert("Form Submitted, Thank you");
  };

  validate = () => {
    const { error } = this.schema.validate(this.state.data, {
      abortEarly: false,
    });

    const errors = {};
    if (error) {
      error.details.forEach((e) => {
        errors[e.path[0]] = e.message;
      });
      return errors;
    }

    return null;
  };

  renderInput = (name, placeholder, error, ...rest) => {
    return (
      <Input
        {...rest}
        placeholder={placeholder}
        error={error}
        name={name}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = (label) => {
    return <Button label={label} />;
  };

  render() {
    return (
      <form className='form card' onSubmit={this.handleSubmit}>
        {this.renderInput(
          "firstname",
          "First Name",
          this.state.errors.firstname
        )}
        {this.renderInput("lastname", "Last Name", this.state.errors.lastname)}
        {this.renderInput(
          "email",
          "Email Address",
          this.state.errors.email,
          "email"
        )}
        {this.renderInput(
          "password",
          "Password",
          this.state.errors.password,
          "password"
        )}
        {this.renderButton("Claim your free trial")}
        <p className="terms-text">
          By clicking the button you are agreeing to our{" "}
          <span className="terms-text--danger">Terms & Services</span>
        </p>
      </form>
    );
  }
}

export default Form;
