import {Navbar, Nav} from 'react-bootstrap';
import Link from 'next/link'

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Murat Menzilci</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
                <a>Home</a>
            </Link>    
            <Link href="/about">
                <a>About</a>
            </Link>        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
