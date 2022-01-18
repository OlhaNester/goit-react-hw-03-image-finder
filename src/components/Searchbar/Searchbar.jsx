import React, { Component } from "react";
import { toast } from "react-toastify";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("Enter query!");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <div>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
