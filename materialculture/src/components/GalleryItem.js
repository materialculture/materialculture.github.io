import "./GalleryItem.css";

function GalleryItem(props) {
  console.log("image src is:", props.imageSrc);
  return (
    <>
      <div className="image-container">
        <img className="gallery-image" src={props.imageSrc} alt="FUCK2" />
      </div>
    </>
  );
}

export default GalleryItem;
