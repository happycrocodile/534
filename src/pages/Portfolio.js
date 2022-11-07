import images from "../assets/images";
import { Button, Card, Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import Line from "../components/Line";
import Typography from "../components/Typography";
import { BackgroundImage } from "../components/BackgroundImage";
import useSWR from "swr";
import Margin from "../components/Margin";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
    const [show, setShow] = useState(false);

    const { data } = useSWR("https://api.github.com/users/happycrocodile/repos");

    return (
        <>
            <Button onClick={() => setShow(true)}>Ver destacados</Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Card className="text-white">
                        <Card.Img src={images.section} />
                        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                            <div>
                                <Card.Title>Demostración</Card.Title>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ol" numbered>
                        {data.map((x, index) => {
                            if (x.homepage) {
                                return (
                                    <ListGroup.Item key={index}>
                                        <Typography>{x.name}</Typography>
                                        <Typography.P>{x.description}</Typography.P>
                                        <Margin.Bottom>
                                            {x.homepage ? <Button>Ver demo</Button> : null}
                                            <a href={x.html_url} rel="noreferrer" target="_blank" className="btn btn-link">
                                                <FontAwesomeIcon icon={faGithub} size="lg" />
                                            </a>
                                        </Margin.Bottom>
                                    </ListGroup.Item>
                                )
                            } else {
                                return [];
                            }
                        })}
                    </ListGroup>
                    <Margin.Top>
                        <Button onClick={() => setShow(false)}>Cerrar</Button>
                    </Margin.Top>
                </Modal.Body>
            </Modal>
        </>
    );
}

function Portfolio() {
    return (
        <BackgroundImage image={images.nature}>
            <Container>
                <Row className="align-items-center vh-100">
                    <Col>
                        <Row>
                            <Col data-scroll data-scroll-speed={3} lg={6} className="mx-auto">
                                <Card className="img-thumbnail text-white">
                                    <Card.Img src={images.test} alt="" />
                                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                        <div>
                                            <Typography.H3>Proyectos</Typography.H3>
                                            <Line />
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                        <Margin.Top>
                            <Row>
                                <Col data-scroll data-scroll-speed={2} className="text-center text-white">
                                    <Typography.H5>Encuentra mis proyectos en GitHub o mira mis proyectos de demostración haciendo clic en el botón de abajo</Typography.H5>

                                    <Margin.Top>
                                        <Projects />
                                        <a href="https://github.com/ezgaribotti" rel="noreferrer" target="_blank" className="btn btn-link text-white">
                                            <FontAwesomeIcon icon={faGithub} size="lg" />
                                        </a>
                                    </Margin.Top>
                                </Col>
                            </Row>
                        </Margin.Top>
                    </Col>
                </Row>
            </Container>
        </BackgroundImage>
    );
}

export default Portfolio;
