import { Card } from "react-bootstrap";
import header from "../assets/header.jpg";


function Home() {
    return (
        <Card>
            <Card.Img src={header} data-scroll data-scroll-speed={6} className="vh-100" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center text-white">
                <div data-scroll data-scroll-speed={2}>
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fuga non?</p>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Home;
