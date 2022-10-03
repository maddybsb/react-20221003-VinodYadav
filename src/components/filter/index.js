
import Search from "./../../images/search.svg";

function Filter() {
  return (
  
      <div className="card-div">
      <div class="card">
        <div className="col-3">
            <label className="label">
              CITY
              <input className="filter-input" placeholder="Select your city" />
            </label>
        </div>
        <div className="col-3">
          <label className="label">
            DATES
            <input className="filter-input" placeholder="Select your dates" />
          </label>
        </div>
        <div className="col-3">
          <label className="label">
            GUEST
            <input className="filter-input" placeholder="Add guests" />
          </label>
        </div>
        <div className="col-3">
          <button className="search label">
            {" "}
            <img src={Search} />
            Search
          </button>
        </div>
        </div>
      </div>
  );
}

export default Filter;
