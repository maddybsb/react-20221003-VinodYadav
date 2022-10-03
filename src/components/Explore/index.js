
import Explore1 from "./../../images/explore1.png";
import Explore2 from "./../../images/explore2.png";

function Explore() {
  return (
    <div className="container explore ">
      <div className="explore-head-div">
        <h1 className="all-heading">Explore</h1>
        <h4 className="all-sub-headings">
          From one-guest rooms to penthouses with pools and gardens
        </h4>
      </div>
      <div className="container-explorer">
        <div className="col-6">
          <img src={Explore1} className="image" />
          <div className="card2">
            <h4 className="explore-sub-head">Room with one king-size bed</h4>
            <div className="btn-div">
              <button className="btn2">35$</button>
              <button className="btn2">
                28m<sup>2</sup>
              </button>
              <button className="btn2 book-btn">Book</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={Explore2} className="image" />
          <div className="card2">
            <h4 className="explore-sub-head">Penthouse for 8 person</h4>
            <div className="btn-div">
              <button className="btn2">2039$</button>
              <button className="btn2">
                438m<sup>2</sup>
              </button>
              <button className="btn2 book-btn">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
