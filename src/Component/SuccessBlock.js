import React, { Component } from "react";

class SuccessBlock extends Component {
  render() {
    return (
      <div className="successBlock d-flex flex-column w-50 p-3 align-items-center bg-light bg-gradient text-success">
        <i
          className="fa-regular fa-circle-check fa-bounce"
          style={{ color: "#33d17a" }}
        ></i>
        <h4>SUCCESS</h4>
        <p className="text-center ">
          Congratulations, your accout has been successfully created
        </p>
        <button
          onClick={this.props.handleContinue}
          className="btn btn-success text-dark"
        >
          CONTINUE
        </button>
      </div>
    );
  }
}
export default SuccessBlock;
