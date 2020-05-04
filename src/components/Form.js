import React from "react";

import "./Form.css";

class Form extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  changeInput = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { firstName, lastName, email, message } = this.state;
    return (
      <div>
        <form className="form">
          <div className="formContainer">
            <div className="label">
              <label htmlFor="firstName" id="first">
                First name:
              </label>
            </div>
            <div className="label">
              <input
                id="firstName"
                className="text"
                name="firstName"
                type="text"
                value={firstName}
                onChange={this.changeInput}
              />
            </div>
          </div>
          <div className="formContainer">
            <div className="label">
              <label htmlFor="lastName">Last name:</label>
            </div>
            <div className="label">
              <input
                id="lastName"
                className="text"
                name="lastName"
                type="text"
                value={lastName}
                onChange={this.changeInput}
              />
            </div>
          </div>
          <div className="formContainer">
            <div className="label">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="label">
              <input
                id="email"
                className="text"
                name="email"
                type="email"
                value={email}
                onChange={this.changeInput}
              />
            </div>
          </div>
          <div className="formContainer">
            <div className="label">
              <label htmlFor="message">Your message:</label>
            </div>
            <div className="label">
              <textarea
                id="message"
                className="text"
                name="message"
                value={message}
                onChange={this.changeInput}
              ></textarea>
            </div>
          </div>
          <input id="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;