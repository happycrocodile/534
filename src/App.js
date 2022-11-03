import { useRef } from "react";
import { Container } from "react-bootstrap";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Background from "./pages/Background";

function App() {

    const ref = useRef(null);

    return (
        <LocomotiveScrollProvider options={{ smooth: true }} watch={[]} containerRef={ref}>
            <Container fluid data-scroll-container ref={ref}>
            <footer></footer>
                <Background />
            </Container>
        </LocomotiveScrollProvider>
    );
}

export default App;
