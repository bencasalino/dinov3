import React, { Component } from "react";
import "./App.css";
import  Header  from "./Header";
import { JobDetails } from "./JobDetails";
import  Footer  from "./Footer";
import InputForm from "./InputForm";
import { Preview } from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerText: "",
      data: {}
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    event.preventDefault()
    this.setState({innerText: event.target.value}); 
  }

  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails jobData={this.state.data} />
          <InputForm showPreview={(event) => this.onInputChange(event)} currentValue={this.state.currentValue} submitHandler=/>

          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
