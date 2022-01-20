import {ImageItem} from './ImageGalleryItaem.styled';
;

const ImageGalleryItem = ({ id, src, alt, largeImageURL, onClick }) => {
    return (  <ImageItem  key={id}>
      <img
        src={src}
        alt={alt}
        largeimageurl={largeImageURL}
        onClick={onClick}              
      />
    </ImageItem> );
}
 
export default ImageGalleryItem;