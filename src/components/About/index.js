
import About1 from "./../../images/about1.png";
import About2 from "./../../images/about2.png";
import About3 from "./../../images/about3.png";
import About4 from "./../../images/about4.png"; 
function Explore() {
  return (
    <div className=" container explore ">
      <div className="explore-head-div">
        <h1 className="all-heading">About US</h1>
        <h4 className="all-sub-headings">
          Allow us to tell you a short story...
        </h4>
      </div>
      <div className="container-explorer">
        <div className="col-5">
          <img src={About1} className="image" />
          <div className="card2">
            <h3 className="">Chapter I</h3>
            <div className="btn-div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </div>
          </div>
        </div>
        <div className="col-7">
          <img src={About2} className="image" />
          <div className="card2">
            <h3 className="">Chapter II</h3>
            <div className="btn-div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </div>
          </div>
        </div>
      </div>

      <div className="container-explorer">
        <div className="col-5" style={{ marginTop: "-5%" }}>
          {/* <img src={Explore1} /> */}
          <img src={About3} className="image" />
          <div className="card2">
            <h3 className="">Chapter I</h3>
            <div className="btn-div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </div>
          </div>
        </div>
        <div className="col-7">
          <img src={About4} className="image" />
          <div className="card2">
            <h3 className="">Chapter II</h3>
            <div className="btn-div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
