import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';


function NavScrollExample() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/navbar" style={{ marginLeft: '6vw' }}>My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/navbar/home">Home</Nav.Link>
              <Nav.Link href="/navbar/about">About</Nav.Link>
              <NavDropdown title="Activity" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/navbar/activity">Activity1</NavDropdown.Item>
                <NavDropdown.Item href="/navbar/activity2">Activity2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button style={{ marginRight: '6vw' }} variant="outline-success" href="/login" >Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Link to={"/navbar/register"} className="btn btn-primary" >REGISTER</Link> */}
      <Outlet />
    </>

  );
}

export default NavScrollExample;