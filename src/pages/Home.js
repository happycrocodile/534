import { Col, Container, Image, Row } from "react-bootstrap";
import images from "../assets/images";
import { BackgroundImage } from "../components/BackgroundImage";
import Line from "../components/Line";
import Typography from "../components/Typography";
import Margin from "../components/Margin";

function Home() {
    return (
        <BackgroundImage image={images.header} className="text-white">
            <Container>
                <Row className="align-items-center">
                    <Col lg={8} className="text-center text-lg-start mt-5 mt-lg-0">
                        <Typography.H5>Hola &#128075;, me llamo</Typography.H5>
                        <Typography.H1 data-scroll data-scroll-speed={-1} data-scroll-direction="horizontal">Ezequiel Garibotti</Typography.H1 >
                        <Line />
                        <Typography.H3>Full Stack Developer</Typography.H3>
                        <Margin.Top>
                            <a href="#about" className="btn btn-primary">Continuar</a>
                        </Margin.Top>
                    </Col>
                    <Col data-scroll data-scroll-speed={4} data-scroll-direction="horizontal" lg={4}>
                        <Image src={images.me} alt="" className="vh-100" />
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );
}

export default Home;
