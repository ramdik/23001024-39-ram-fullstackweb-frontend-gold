import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../assets/styles/global.css"


const NavigationBars = () => {
return (
<div>
    <Navbar className='navigation h-auto border'>
        <Container>
            <Navbar.Brand>Dhika Book</Navbar.Brand>
            <Nav>
            <Link to="/" className="nav-link">
              Tukar Buku
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            </Nav>
        </Container>
    </Navbar>
</div>
)
}

export default NavigationBars;