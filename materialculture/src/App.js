import logo from "./logo.svg";
import "./App.css";
import GalleryItem from "./components/GalleryItem";
import listReactFiles from "list-react-files";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function App() {
  var myArray = Array.from(Array(152), (e, i) => i);
  shuffle(myArray);
  console.log("my array is:", myArray);

  var galleryImgs = [];
  console.log(galleryImgs);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row text-center">
            <h2>m a t e r i a l &nbsp;&nbsp; c u l t u r e</h2>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="row justify-content-center">
            {myArray.map((item) => {
              return <GalleryItem imageSrc={"gallery" + item + ".png"} />;
            })}
          </div>
        </div>
      </div>
      <div className="made-by-container">
        <div className="container">
          <div className="row justify-content-center py-2">
            <div className="col-12 text-center">
              <p className="made-by">
                created by{" "}
                <a href="https://kopfportfolio.wixsite.com/2021">kate kopf</a> |
                built by <a href="https://danielknopf.com">daniel knopf</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
