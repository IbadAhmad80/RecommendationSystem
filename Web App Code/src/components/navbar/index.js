import React from "react";
import "../../css/style.css";
import { FaEnvelope, FaFacebook, FaGithubAlt, FaTwitter } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import { useHistory } from "react-router";
import cogoToast from "cogo-toast";

export default function NavBar() {
  const history = useHistory();
  const [user, loading] = useAuthState(auth);

  const handleProfileClick = async () => {
    if (loading) {
      // maybe trigger a loading screen
    }
    if (!user) {
      history.push("/sign-in");
    }
    if (user) {
      let data = localStorage.getItem("user");
      data = JSON.parse(data);
      data
        ? data?.role === "admin"
          ? history.replace("/admin-panel")
          : history.replace("/dashboard")
        : history.push("/sign-in");
    }
  };
  return (
    <header className="navigation .bg-dark ">
      <div className="header-top  ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-12 my-3 col-md-8 text-center">
              <div className="header-top-info my-md-0 mb-md-0 mb-2">
                Call Us : <span className="text-white">+92-3032182370</span>
                <a href="mailto:clever@gmail.com">
                  <i className="mx-2">
                    <FaEnvelope />
                  </i>
                  <span>clever@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className=" px-4 px-sm-0"
          id="navbar"
          // fixed="top"
        >
          <Container>
            <Link to="/">
              <Navbar.Brand className="fs-2 text-capitalize fw-bolder py-2">
                Clever<span style={{ color: "#f75757" }}>Us.</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto text-center">
                <Nav.Link
                  className="px-2 nav-links text-uppercase nav-link"
                  href="#home"
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link
                  href="#famous-places"
                  className="px-2 nav-links text-uppercase nav-link"
                >
                  <a href="/#famous-places" className="nav-link">
                    Famous Places
                  </a>
                </Nav.Link>
                <Nav.Link
                  className="px-3 nav-links text-uppercase nav-link"
                  href="#contact"
                >
                  <Link to="/search" className="nav-link">
                    Find Place
                  </Link>
                </Nav.Link>
                <Nav.Link className="px-3 nav-links text-uppercase nav-link">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </Nav.Link>

                <Nav.Link className="px-3 nav-links text-uppercase nav-link">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav
                className="text-center mt-2 mt-lg-0 "
                onClick={handleProfileClick}
              >
                <button className="text-white fs-6 px-4 py-2 btn-solid-border btn-round-full">
                  My Profile
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
