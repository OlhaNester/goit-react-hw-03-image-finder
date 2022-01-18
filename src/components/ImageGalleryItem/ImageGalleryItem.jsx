const ImageGalleryItem = ({ id, src, alt, largeImageURL,  }) => {
    return (  <li  key={id}>
      <img
        src={src}
        alt={alt}
        largeimageurl={largeImageURL}
        
        
      />
    </li> );
}
 
export default ImageGalleryItem;