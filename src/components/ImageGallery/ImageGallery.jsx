
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import {ImageGalleryContainer} from './imageGallery.styled';
;




const ImageGallery =({images, onClick})=> {
  
      return (
        <ImageGalleryContainer>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeimageurl={largeImageURL}
                onClick={() => onClick(largeImageURL)}
              />
            );
          })}
        </ImageGalleryContainer>
      );
    }
export default ImageGallery;
