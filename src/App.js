import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//API key: 20298268-ad7854859c2b2dc6e8b44e367

export default class App extends Component {
  state = {
    query: "",
    showModal: false,
    largeImage: "",
  };
  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  saveLargeImage = (url) => {
    this.setState({ largeImage: url });
    this.toggleModal();
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery query={this.state.query} onClick={this.saveLargeImage} />
        {showModal && (
          <Modal onClose={this.toggleModal} url={this.state.largeImage} />
        )}
        <Button />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
