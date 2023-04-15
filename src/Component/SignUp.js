import React, { Component } from "react";
import validator from "validator";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      role: "",
      email: "",
      password: "",
      repeatPassword: "",
      isSubmitted: false,
      isChecked: false,
    };
  }

  inputOnChange = (event) => {
    console.log(event.target.checked);
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  formOnSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSubmitted: true,
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      role: "",
      email: "",
      password: "",
      repeatPassword: "",
      isChecked: false,
    });
  };
  render() {
    let {
      firstName,
      lastName,
      gender,
      age,
      role,
      email,
      password,
      repeatPassword,
      isChecked,
      isSubmitted,
    } = this.state;

    return (
      <form
        onSubmit={this.formOnSubmit}
        className="d-flex flex-column align-items-center  p-3"
      >
        <h1 className="text-center">SIGN UP</h1>

        <div className=" input-field form-control pl-2 d-flex align-items-center ">
          <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
          <input
            className="form-control"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={this.inputOnChange}
            maxLength={30}
            required
          />
        </div>

        <p className="error">
          {validator.isAlpha(firstName) || firstName === ""
            ? ""
            : "Please enter valid first name"}
        </p>

        <div className="input-field form-control pl-2 d-flex align-items-center">
          <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            maxLength={20}
            onChange={this.inputOnChange}
          />
        </div>
        <p className="error">
          {validator.isAlpha(lastName) || lastName === ""
            ? ""
            : "Please enter valid last name"}
        </p>

        <div className="input-field  form-control">
          <input
            className="age form-control "
            type="number"
            placeholder="Age"
            name="age"
            value={age}
            min="1"
            max="200"
            onChange={this.inputOnChange}
            required
          />
        </div>

        <div className="input-field form-control">
          <select
            className="form-control"
            name="gender"
            value={gender}
            onChange={this.inputOnChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-field form-control">
          <select
            className="form-control"
            value={role}
            onChange={this.inputOnChange}
            required
            name="role"
          >
            <option value="">Select Role</option>
            <option value="developer">Developer</option>
            <option value="seniorDeveloper">Senior Developer</option>
            <option value="leadEngineer">Lead Engineer</option>
            <option value="CTO">CTO</option>
          </select>
        </div>

        <div className=" input-field form-control pl-2 d-flex align-items-center ">
          <i
            className="fa-solid fa-envelope fa-sm"
            style={{ color: "#000000" }}
          ></i>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.inputOnChange}
            maxLength={40}
            required
          />
        </div>

        <p className="error">
          {validator.isEmail(email) || email === ""
            ? ""
            : "Please enter valid Email ID"}
        </p>

        <div className=" input-field form-control pl-2 d-flex align-items-center ">
          <i
            className="fa-solid fa-lock fa-sm"
            style={{ color: "#000000" }}
          ></i>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.inputOnChange}
            minLength={8}
            maxLength={15}
            required
          />
        </div>
        <p className="error">
          {validator.isStrongPassword(password) || password === ""
            ? ""
            : "Please enter a strong password"}
        </p>

        <div className=" input-field form-control pl-2 d-flex align-items-center ">
          <i
            className="fa-solid fa-lock fa-sm"
            style={{ color: "#000000" }}
          ></i>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={this.inputOnChange}
            maxLength={15}
            required
          />
        </div>
        <p className="error">
          {validator.equals(password, repeatPassword) || repeatPassword === ""
            ? ""
            : "Password is not matching"}
        </p>

        <div className="d-flex mt-1">
          <input
            type="checkbox"
            name="isChecked"
            checked={isChecked}
            onChange={this.inputOnChange}
            className="mt-0 m-1 align-self-start"
            required
          />
          <p>Agree to Terms & Conditions</p>
        </div>

        <button className="btn btn-primary mb-2" type="submit">
          SUBMIT
        </button>

        <p>{isSubmitted ? "Registered Successfully!!" : ""}</p>
      </form>
    );
  }
}
export default SignUp;
