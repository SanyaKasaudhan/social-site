import React from 'react'

const Navbar = () => {
  return (
    <div>
          <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqEcmTQJovNDdq8q3B-FJPq9ehukL1OPcaw&usqp=CAU"
              alt="search-icon"
            />
            <input placeholder="Search" />

            {/* <div className="search-results">
              <ul>
                 <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li> 
              </ul>
            </div> */}
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlQnuOUWEpSDVJ3NCp5ya48gZggoX_GpQ5w&usqp=CAU"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar