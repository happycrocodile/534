import { Button, Card, Col, Row } from "react-bootstrap";
import background from "../assets/background.png";
import me from "../assets/me.png";

function Background() {
    return (
        <Card id="fixed-target">
            <Card.Img src={background} className="filter" />
            <Card.ImgOverlay className="text-white">
                <Row>
                    <Col lg={12} className="position-fixed mt-5" style={{ marginLeft: 120 }}>
                        <h3 className="display-3" data-scroll data-scroll-direction="horizontal" data-scroll-speed={1}>Hello 👋, I'm</h3>
                        <h1 className="display-1" data-scroll data-scroll-direction="horizontal" data-scroll-speed={2}>Ezequiel Garibotti</h1>
                        <hr className="w-25" data-scroll data-scroll-direction="horizontal" data-scroll-speed={5} />
                        <br></br>
                        <h2 className="display-3" data-scroll data-scroll-direction="horizontal" data-scroll-speed={-2}>Software developer and Designer</h2>
                        <br></br>
                        <br></br>
                        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed={6}>
                        <Button size="lg">Get started</Button>
                        <Button size="lg" variant="link" className="text-decoration-none ms-4">About me</Button>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 4 }} data-scroll data-scroll-speed={-2} data-scroll-direction="horizontal">
                        <img src={me} className="me pb-3"></img>
                    </Col>
                </Row>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Background;