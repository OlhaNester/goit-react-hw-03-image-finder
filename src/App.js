import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';

//API key: 20298268-ad7854859c2b2dc6e8b44e367

export default class App extends Component {
  state = {
    
    
    query: '',
  }
  handleFormSubmit = query => {
    this.setState({query});
}

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   await Axios.get(`https://pixabay.com/api/?q=dog&page=1&key=20298268-ad7854859c2b2dc6e8b44e367&image_type=photo&orientation=horizontal&per_page=12`)
  //     .then(response => this.setState({ images: response.data.hits })).finally(() => this.setState({ loading: false }));
    
    
  // }
  render() {
    return (
      <div>
        <Searchbar onSubmit={ this.handleFormSubmit}/>
        {this.state.loading &&<h1>Загружаем</h1>
          
        }
        
         <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={3000}/>
      </div>
    )
  }
}
