const ImageGalleryItem = ({ id, src, alt, largeImageURL, onClick }) => {
    return (  <li  key={id}>
      <img
        src={src}
        alt={alt}
        largeimageurl={largeImageURL}
        onClick={onClick}              
      />
    </li> );
}
 
export default ImageGalleryItem;