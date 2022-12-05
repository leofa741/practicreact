import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
                <small className="ms-4"><i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small><i className="fa fa-envelope text-primary me-2"></i>info@example.com</small>
                <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="display-5 text-primary m-0">Finanza</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                <NavLink to="/home" className="nav-item nav-link " > <span  data-bs-toggle="collapse"   data-bs-target="#navbarCollapse">Home </span></NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Services</NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu border-light m-0">
                            <a href="project.html" className="dropdown-item">Projects</a>
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="team.html" className="dropdown-item">Team Member</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
                <div className="d-none d-lg-flex ms-2">
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-facebook-f text-primary"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-twitter text-primary"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-linkedin-in text-primary"></small>
                    </a>
                </div>
            </div>
        </nav>
    </div>
</>
  )
}
