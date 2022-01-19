import Axios from "axios";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from "react";
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

//'idle'
//'pending'
//'resolved'
//'rejected'

export default class ImageGallery extends Component {
  state = {
    images: [],
   
      error: null,
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending' });
        await Axios.get(
            `https://pixabay.com/api/?q=${this.props.query}&page=1&key=20298268-ad7854859c2b2dc6e8b44e367&image_type=photo&orientation=horizontal&per_page=12`
        )
            .then((response) => this.setState({ images: response.data.hits, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }));  
        
      
    }
  }
    render() {
        const { images, error, status } = this.state;
        //const { query } = this.props;
        const onClick = this.props

        if (status === 'idle') {
           return <div>Введите запрос</div> 
        }

        if (status === 'pending') {
          return  <Loader/>
        }

        if (status === 'rejected' || images.length === 0) {
            return <Error message={error} />;
        }

        if (status === 'resolved') {
           return  <ul> {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
            <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
            largeimageurl={largeImageURL}
            onClick={()=>onClick(largeImageURL)}

            />
        );
    })}
    </ul>
        }

       
    // return (
    //     <>
    //         {error && <h1> error</h1>}
    //     {loading && <h1>Загружаем...</h1>}
    //         {!query && <div>Введите запрос</div>}
    //         <ul> {images.map(({ id, webformatURL, tags, largeImageURL }) => {
    //     return (
    //         <ImageGalleryItem
    //             key={id}
    //             src={webformatURL}
    //             alt={tags}
    //             largeimageurl={largeImageURL}

    //         />
    //     );
    // })}
    // </ul>
    //   </>
    // );
  }
}
