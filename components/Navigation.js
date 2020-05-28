import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { MdAccountBox, MdEmail, MdHome } from "react-icons/md";

function Navigation() {
  return (
    <div>
      <Navbar sticky="top" bg="light" expand="lg" className="my-navbar">
        <div className="container">
          <Navbar.Brand>Murat Menzilci</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/">
                <a className="hover-link">
                  <MdHome className="home-icon" />
                  Home
                </a>
              </Link>
              <Link href="/About">
                <a className="hover-link">
                  <MdAccountBox className="home-icon" />
                  About
                </a>
              </Link>
              <Link href="/Contact">
                <a className="hover-link">
                  <MdEmail className="home-icon" />
                  Contact
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
