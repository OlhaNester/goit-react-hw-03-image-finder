import React, { Component } from "react";
import { toast } from "react-toastify";
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchSpan,
  SearhInput,
} from "./Searchbar.styled";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
    console.log("handleChange");
  };

  handleSubmit = (event) => {
    console.log("first");
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
      <SearchbarContainer>
        <header>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <SearchSpan>Search</SearchSpan>
            </SearchFormButton>

            <SearhInput
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
            />
          </SearchForm>
        </header>
      </SearchbarContainer>
    );
  }
}
