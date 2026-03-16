import React from 'react';
function Navbar() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
              <a className="navbar-brand" href="#">
                <img src="/Assets/logo.svg" style={{width:"25%"}} alt='logo'  />
              </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Support
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
