import { useLayoutEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function AppBar() {

    const { scroll } = useLocomotiveScroll();
    const [background, setBackground] = useState(null);

    const changeBackground = () => {
        console.log(scroll);
        // if (window.scrollY >= 100) {
        //     setBackground("light");
        // } else {
        //     setBackground(null);
        // }
    }

    console.log(scroll);

    window.addEventListener("scroll", changeBackground);

    return (
        <Navbar expand="lg" bg={background} variant="dark" fixed="top">
            <Container>
                <Navbar.Toggle className="shadow-none" />
                <Navbar.Offcanvas>
                    <Offcanvas.Body>
                        <Nav className="mx-auto">
                            <Nav.Link>Inicio</Nav.Link>
                            <Nav.Link>Sobre mí</Nav.Link>
                            <Nav.Link>Proyectos</Nav.Link>
                            <Nav.Link>Contacto</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default AppBar;