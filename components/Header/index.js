/* eslint-disable consistent-return */
/* eslint-disable no-else-return */

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav, Container } from "react-bootstrap";
import { API_URL } from "../../apiServices";

const DarkLogo = "/img/logo-png-vertical.png";

function Header({ data }) {
  const router = useRouter();

  const location = router.pathname.split("/");
  const [header, setHeader] = useState("header");

  //  On Scroll Function and Validation
  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      const nav = document.getElementById("responsive-navbar-nav");
      nav.classList.remove("show");

      if (window.location.pathname === "/") {
        return setHeader("whiteheader");
      }
      return setHeader("blueheader");
    }
  };

  // For Mobile Scroll Up
  const scrollUp = () => {
    if (window.scrollY > 70) {
      window.scrollTo(0, 0);
    }
  };

  // Close Header
  const closeHeader = () => {
    const nav = document.getElementById("responsive-navbar-nav");
    nav.classList.remove("show");
  };

  // useEffect for Scroll
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const link =
    router.pathname === "/"
      ? data.headerDarkLogo.url
      : data.headerWhiteLogo.url;

  return (
    <Navbar className={header} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbar_Logo">
          {/* Logo for Desktop */}
          <img className="logo-path" src={API_URL + link} alt="" />
          {/* Logo for Mobile */}
          <img className="dark-logo" src={DarkLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={scrollUp}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav onClick={closeHeader} className="ml-auto">
            <Link href="/">
              <a className={location[1] === "" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/case-study">
              <a
                className={
                  location[1] === "case-study" ||
                  location[1] === "case-study-details"
                    ? "active"
                    : ""
                }
              >
                Case Study
              </a>
            </Link>
            <Link href="/services">
              <a className={location[1] === "services" ? "active" : ""}>
                Services
              </a>
            </Link>
            <Link href="/blogs">
              <a
                className={
                  location[1] === "blogs" || location[1] === "blog-details"
                    ? "active"
                    : ""
                }
              >
                Blogs
              </a>
            </Link>
            <Link href="/about-us">
              <a className={location[1] === "about-us" ? "active" : ""}>
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className={location[1] === "contact" ? "active" : ""}>
                Contact
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
