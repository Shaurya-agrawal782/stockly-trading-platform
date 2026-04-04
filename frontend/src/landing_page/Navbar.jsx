import React from 'react';
import {Link} from "react-router-dom";


function Navbar() {
    return (
      <div className="container mb-5 p-2">
        <nav className="navbar fixed-top navbar-expand-lg bg-white">
          <div className="container-fluid border-bottom p-1">
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
                
              <Link className="navbar-brand" to='/'>
                <img src="/Assets/logo.png" style={{width:"100px"}} alt='logo'  />
              </Link>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/product">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/support">
                    Support
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
