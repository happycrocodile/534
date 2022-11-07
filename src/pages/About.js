import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import images from "../assets/images";
import Line from "../components/Line";
import { BackgroundImage } from "../components/BackgroundImage";
import Typography from "../components/Typography";
import Margin from "../components/Margin";

function About() {
    return (
        <BackgroundImage image={images.body}>
            <Container id="about">
                <Row className="align-items-center gap-lg-0 gap-5">
                    <Col data-scroll data-scroll-speed={2} xs={8} className="mx-auto" md={6} lg={4}>
                        <Image src={images.profile} fluid thumbnail />
                    </Col>
                    <Col data-scroll data-scroll-speed={4} lg={8}>
                        <Card>
                            <Card.Body>
                                <Typography.H4>Sobre mí</Typography.H4>
                                <Line start />
                                <Typography.P>Me llamo Ezequiel. Soy desarrollador de software con trayectoria dentro de lo que es la creación de páginas web, sistemas de gestión de contenidos (CMS), análisis y gestión de datos. De chico me fascinaba darle instrucciones a la computadora y que esta las haga. Esa fascinación trascendió a hoy sea programador.</Typography.P>
                                <Margin.Top>
                                    <Button>Descargar CV</Button>
                                </Margin.Top>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );
}

export default About;
