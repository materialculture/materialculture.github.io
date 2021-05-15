import "./GalleryItem.css";

function GalleryItem(props) {
  console.log("image src is:", props.imageSrc);
  return (
    <>
      <div className="col-2 p-4 text-center">
        <div className="image-container">
          <img className="gallery-image" src={props.imageSrc} alt="FUCK2" />
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
