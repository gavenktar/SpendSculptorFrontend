import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header= ()=>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color":'gold'}}>
                    SpendSculptor
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className ="nav-link" to="/">Главная страница</NavLink>
                        <NavLink className ="nav-link" to="/">Учесть расходы</NavLink>
                        <NavLink className ="nav-link" to="/">Моя аналитика</NavLink>
                        <NavLink className ="nav-link" to="/">О нас</NavLink>

                    </Nav>
                    <Button variant="outline-info" className="me-2">Войти</Button>
                    <Button variant="outline-info">Зарегистрироваться</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header