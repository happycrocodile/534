import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { BackgroundImage } from "../components/BackgroundImage";
import Line from "../components/Line";
import images from "../assets/images";
import Typography from "../components/Typography";
import Margin from "../components/Margin";

function Blog() {
    return (
        <BackgroundImage image={images.header}>
            <Container>
                <Row className="align-items-center vh-100">
                    <Col lg={{ span: 6, offset: 6 }} data-scroll data-scroll-speed={3} data-scroll-direction="horizontal" className="position-fixed d-none d-lg-block">
                        <Image src={images.meAlt} className="vh-100" />
                    </Col>
                    <Col>
                        <Margin.Bottom>
                            <Row>
                                <Col data-scroll data-scroll-speed={2} lg={6}>
                                    <Card className="img-thumbnail text-white">
                                        <Card.Img src={images.blog} alt="" />
                                        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                            <div>
                                                <Typography.H2>Blog</Typography.H2>
                                                <Line />
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            </Row>
                        </Margin.Bottom>
                        <Row>
                            <Col data-scroll data-scroll-speed={4} lg={8} className="ms-auto">
                                <Card>
                                    <Card.Body>
                                        <Typography.H3>En desarrollo.</Typography.H3>
                                        <Typography.P>Un blog orientado a compartir códigos de ejemplo y soluciones a problemas que me he encontrado en mis prácticas o trabajos.</Typography.P>
                                        <Margin.Top>
                                            <Button>Ir a Ver</Button>
                                        </Margin.Top>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );
}

export default Blog;
