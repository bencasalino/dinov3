import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Footer from "./components/Footer";
import Listings from "./components/Listings";
import Preview from "./components/Preview";

class App extends Component {
  state = {
    listings: [],
    expanded: false,
    previewText: ""
  };

  componentDidMount() {
    this.getListings();
  }

  handleSubmit = event => {
    event.preventDefault();
    const listings = this.state.listings;
    const preview = this.state.previewText;
    const data = new FormData(event.target);

    listings.push({
      description: data.get("inputdata")
    });
    this.setState({ listings });
    this.setState({ previewText: data.get("inputdata") });
  };

  getListings = () => {
    fetch("./listing.json")
      .then(resp => resp.json())
      .then(listings => {
        if (Array.isArray(listings)) {
          this.setState({ listings });
        } else {
          this.setState({ error: "This data is not valid!!" });
        }
      });
  };
  expand = event => {
    event.preventDefault();
    const expand = this.state.expanded;
    if (expand === false) {
      this.setState({ expanded: true });
    } else {
      this.setState({ expanded: false });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <h4>{this.state.error}</h4>
        <InputForm
          handleSubmit={this.handleSubmit}
          listings={this.state.listings}
          expand={this.expand}
          expanded={this.state.expanded}
          previewText={this.state.previewText}
        />
        <Preview
          listings={this.state.listings}
          expand={this.expand}
          expanded={this.state.expanded}
          previewText={this.state.previewText}
        />
        <Listings listings={this.state.listings} />
        <Footer />
      </div>
    );
  }
}

export default App;
