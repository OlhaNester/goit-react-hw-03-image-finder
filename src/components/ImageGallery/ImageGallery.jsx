import Axios from "axios";
//import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// const ImageGallery = ({ query }) => {
//     return (<ul> {images.map(({ id, webformatURL, tags, largeImageURL }) => {
//         return (
//             <ImageGalleryItem
//                 key={id}
//                 src={webformatURL}
//                 alt={tags}
//                 largeimageurl={largeImageURL}

//             />
//         );
//     })}
//     </ul>
//     )
// };

// export default ImageGallery;

import React, { Component } from "react";

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ loading: true });
      await Axios.get(
        `https://pixabay.com/api/?q=${this.props.query}&page=1&key=20298268-ad7854859c2b2dc6e8b44e367&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => this.setState({ images: response.data.hits }))
        .finally(() => this.setState({ loading: false }));
      //   console.log(response);
      //   this.setState({ images: response.data.hits });
      //   console.log(response.data.hits);
    }
  }
  render() {
    return (
      <>
        {this.state.loading && <div>Загружаем...</div>}
        {!this.props.query && <div>Введите запрос</div>}
      </>
    );
  }
}
