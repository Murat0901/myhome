import {Navbar, Nav} from 'react-bootstrap';
import Link from 'next/link'

function Navigation() {
  return (
    <div>
      <Navbar className="my-navbar" bg="light" expand="lg">
        <Navbar.Brand>Murat Menzilci</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/">
                <a>Home</a>
            </Link>    
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>                
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
