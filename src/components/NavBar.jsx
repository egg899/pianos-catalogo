
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand fs-3 fw-semibold text-warning ps-4"
        >
          PIANOS<span className="text-white">.</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse pe-4" id="mainNavbar">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>

            <NavLink to="/posts" className="nav-link">
              Our Pianos
            </NavLink>

            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
