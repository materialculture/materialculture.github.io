import "./GalleryItem.css";

function GalleryItem(props) {
  return (
    <>
      <div className="col-3 p-4 text-center">
        <div className="image-container">
          <img className="gallery-image" src={props.imageSrc} alt="FUCK2" />
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
