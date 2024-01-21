import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../assets/styles/global.css"


const NavigationBars = () => {
  return (
    <div>
      <Navbar className='navigation h-auto border'>
        <Container>
          <Navbar.Brand>Wedding Shop</Navbar.Brand>
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/admin" className="nav-link">
              Admin Test
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBars;