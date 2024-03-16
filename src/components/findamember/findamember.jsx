import './findamember.css';
import SearchImage01 from '../../assets/images/middle-harbour-club-img.webp';
import SearchImage02 from '../../assets/images/middle-harbour-img.webp';
import SearchImage03 from '../../assets/images/rowers-club-img.webp';

function Findamember() {
    return (
        <>
        <div className="find-member-area diff-color-area mt-200">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Find a member</h2>
            <p>The Mosman Chamber of Commerce’s primary charter is the promotion of local business within the community. The Chamber brings together a diverse group of local businesses with a shared desire to connect with each other.</p>
            <div className="search-outer-control">
              <div className="serach-outer-inner">
                <form id="searchForm" novalidate="novalidate">
                  <div className="input-group">
                    <div className="flex-fill input-outer">
                      <input type="text" placeholder="Search listings" name="searchText" className="form-control" />
                    </div>
                    <button className="click-btn search-btn">Search</button>
                  </div>
                </form>
                <div className="search-result-area">
                  <ul className="search-listing-list">
                    <li>
                      <a href="category-listing-detail.html">
                        <div className="listing-img">
                          <img src={SearchImage03} alt="img" />
                        </div>
                        <h5>Mosman Rowers Club</h5>
                      </a>
                    </li>
                    <li>
                      <a href="category-listing-detail.html">
                        <div className="listing-img">
                          <img src={SearchImage02} alt="img" />
                        </div>
                        <h5>Middle Harbour 16ft Skiff Club</h5>
                      </a>
                    </li>
                    <li>
                      <a href="category-listing-detail.html">
                        <div className="listing-img">
                          <img src={SearchImage01} alt="img" />
                        </div>
                        <h5>Middle Harbour Yacht Club</h5>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Findamember
