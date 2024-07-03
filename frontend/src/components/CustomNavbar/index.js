import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <Navbar bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Sharu React</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Sharukhan</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;