import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdAccountBox, MdEmail } from "react-icons/md";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="my-navbar" >
        <div className="container">
          <Navbar.Brand>Murat Menzilci</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/">
                <a>
                  <FaHome className="home-icon" />
                  Home
                </a>
              </Link>
              <Link href="/About">
                <a>
                  <MdAccountBox className="home-icon" />
                  About
                </a>
              </Link>
              <Link href="/Contact">
                <a>
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
