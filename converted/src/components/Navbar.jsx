import PropTypes from "prop-types";
// import Theme from "./Theme";
import { Link } from "react-router-dom";

const Navbar = ({
  title = "Title",
  aboutText = "About",
  mode,
  toggleMode,
  // changeTheme,
  // themeIndex,
}) => {
  return (
    <nav
      className=// {`
      "navbar navbar-expand-lg p-3"
      data-bs-theme={mode=='light' ? "light" : "dark"}
      // bg-${themeIndex.bg}`}
    >
      <div
        className=// {`
        "container-fluid"
        //  text-${themeIndex.color} `}
      >
        <Link
          className=// {`
          "navbar-brand"
          //  text-${themeIndex.color} `}
          to={"/"}
        >
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link
                className=// {`
                "nav-link active"
                // text-${themeIndex.color}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className=// {`
                "nav-link active"
                //  text-${themeIndex.color}`}
                to="/about"
              >
                {aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          {/* <Theme changeTheme={changeTheme} /> */}

          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
            style={{ cursor: "pointer" }}
          >
            <input
              className="form-check-input pointer-event"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
              style={{ cursor: "pointer" }}
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
              style={{ cursor: "pointer" }}
            >
              DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Navbar.defaultProps = {
//   title: "Title",
//   aboutText: "About",
// };
