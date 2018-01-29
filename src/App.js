import React, { Component } from "react";
import "./App.css";
import  Header  from "./Header";
import { JobDetails } from "./JobDetails";
import  Footer  from "./Footer";
import { InputForm } from "./InputForm";
import { Preview } from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
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
      <head>
        <title> heyyyoooo</title>
        </head>
        <Header />
        <main>
          <JobDetails jobData={this.state.data} />
          <InputForm />
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
