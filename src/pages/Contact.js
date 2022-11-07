import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import Line from "../components/Line";
import { BackgroundImage } from "../components/BackgroundImage";
import images from "../assets/images";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Margin from "../components/Margin";
import Typography from "../components/Typography";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {

    const information = [
        {
            icon: faLocationDot,
            title: "Ubicación",
            description: "Buenos Aires, Argentina"
        },
        {
            icon: faPhone,
            title: "Teléfono / WhatsApp",
            description: "+541122543654"
        },
        {
            icon: faEnvelope,
            title: "Correo electrónico",
            description: "ezgaribotti@gmail.com"
        }
    ];

    const social = [
        {
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/ezequiel-garibotti-92a147235"
        },
        {
            icon: faInstagram,
            href: "#"
        },
        {
            icon: faGithub,
            href: "https://github.com/happycrocodile"
        },
    ];

    return (
        <BackgroundImage image={images.testAlt}>
            <Container>
                <Row className="align-items-center vh-100">
                    <Col>
                        <Margin.Bottom>
                            <Row>
                                <Col data-scroll data-scroll-speed={2} lg={6} className="mx-auto">
                                    <Card className="img-thumbnail text-white">
                                        <Card.Img src={images.section} alt="" />
                                        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                            <div>
                                                <h3>Contacto</h3>
                                                <Line center />
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            </Row>
                        </Margin.Bottom>
                        <Row>
                            <Col lg={8} className="mx-auto" data-scroll data-scroll-speed={1}>
                                <Card>
                                    <Card.Body>
                                        <Margin.Bottom>
                                            <Card.Subtitle>Estos son los medios por los cuales me pueden contactar.</Card.Subtitle>
                                        </Margin.Bottom>

                                        <Row>
                                            {information.map((x, index) => {
                                                return (
                                                    <Col key={index} lg={4}>
                                                        <FontAwesomeIcon icon={x.icon} size="lg" />
                                                        <Typography className="small ms-3">{x.title}</Typography>
                                                        <Typography.H6 className="mt-3">{x.description}</Typography.H6>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                        <Row className="mt-3">
                                            <Col>
                                                <Nav className="justify-content-center">
                                                    {social.map((x, index) => {
                                                        return (
                                                            <Nav.Link href={x.href} target="_blank" key={index}>
                                                                <FontAwesomeIcon icon={x.icon} size="xl" />
                                                            </Nav.Link>
                                                        )
                                                    })}
                                                </Nav>
                                            </Col>
                                        </Row>
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

export default Contact;
