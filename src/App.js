import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Typography from "./components/Typography";

function App() {

    const ref = useRef(null);

    return (
        <>
            <LocomotiveScrollProvider options={{ smooth: true }} watch={[]} containerRef={ref}>
                <main data-scroll-container ref={ref}>
                    <Home />
                    <About />
                    <Services />
                    <Blog />
                    <Portfolio />
                    <Contact />
                    <footer>
                        <Container>
                            <Row>
                                <Col className="text-center">
                                    <Typography className="small text-white text-lg-dark">ezequielgaribotti.com &copy;</Typography>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
                </main>
            </LocomotiveScrollProvider>
        </>
    );
}

export default App;
