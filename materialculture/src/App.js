import logo from "./logo.svg";
import "./App.css";
import GalleryItem from "./components/GalleryItem";
import listReactFiles from "list-react-files";

function App() {
  var galleryImgs = [];
  console.log(galleryImgs);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row text-center">
            <h1>material culture</h1>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="row">
            {Array.from(Array(7), (e, i) => {
              return (
                <div className="col-2 py-4">
                  <GalleryItem imageSrc={"gallery" + i + ".png"} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
