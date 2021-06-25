import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="row mb-3 nav__color">
      <div className="col-10 mx-auto ">
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end nav__color">
          <div className="container-fluid nav__color">
            <a className="navbar-brand brand nav__color">Baren</a>
            <button
              className="navbar-toggler btn btn-outline-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mb-2 mb-lg-0 nav__color"
              id="navbarNavDropdown"
            >
              {/* Nav items  */}
              <ul className="navbar-nav ms-auto nav__color">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="when-active"
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    activeClassName="when-active"
                    className="nav-link"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeClassName="when-active"
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    activeClassName="when-active"
                    className="nav-link"
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
