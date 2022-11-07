import { Card, Col, Container, Row } from "react-bootstrap";
import images from "../assets/images";
import { BackgroundImage } from "../components/BackgroundImage";
import Line from "../components/Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../components/Typography";
import Margin from "../components/Margin";
import { faLaravel, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

function Services() {

    const services = [
        {
            icon: faLaravel,
            title: "Laravel",
            description: "Para realizar proyectos de backend utilizo el framwork Laravel. Para esto tengo conocimiento en PHP, MySQL, PostgreSQL, Git para el control de versiones y API Rest."
        },
        {
            icon: faReact,
            title: "React",
            description: "Para realizar proyectos de frontend utilizo la librería React. Para esto tengo conocimiento en JavaScript, TypeScript, Bootstrap, Sass. Y Redux para el manejo de estados de la aplicación."
        },
        {
            icon: faPython,
            title: "Python",
            description: "Para proyectos de análisis y/o manejo de datos como puede ser gráficas, reportes automatizados por Excel o integraciones vía API Rest, SFTP o Excel, utilizó Python."
        }
    ];

    return (
        <BackgroundImage image={images.blog}>
            <Container>
                <Margin.Bottom>
                <Row>
                    <Col data-scroll data-scroll-speed={2} lg={6}>
                        <Card className="img-thumbnail text-white">
                            <Card.Img src={images.section} alt="" />
                            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                <div>
                                    <Typography.H3>Mis habilidades</Typography.H3>
                                    <Line />
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                </Margin.Bottom>
                <Row>
                    <Col lg={10} className="ms-auto">
                        <Row>
                            {services.map((service, index) => {
                                return (
                                    <Col key={index} lg={4} data-scroll data-scroll-speed={3}>
                                        <Card>
                                            <Card.Body>
                                                <Margin.Bottom className="d-flex align-items-center gap-3">
                                                    <FontAwesomeIcon icon={service.icon} size="xl" />
                                                    <Typography.H4>{service.title}</Typography.H4>
                                                </Margin.Bottom>
                                                <Typography.P>{service.description}</Typography.P>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );
}

export default Services;
