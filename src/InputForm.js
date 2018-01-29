import React from "react";

export class InputForm extends React.Component {
  submitHandler(event) {
    event.preventDefault();
    document.querySelector("#message").textContent = "Your application was submitted!";
    document.querySelector("#application-preview").classList.add("hidden");
    document.querySelector("#application-preview").textContent = "";
  }

  render() {
    return (
      <form id="application-input" onSubmit={this.submitHandler}>
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100" />
        <input id="submit" type="submit" value="Submit" />
      </form>
    );
  }
}
