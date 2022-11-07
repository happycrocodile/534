import { createElement } from "react";
import { Container } from "react-bootstrap";

function Background({ image, className, style, children, height = 100 }) {

    let linearGradient = "rgba(0, 0, 0, darken)".replace("darken", 0);

    linearGradient += String.fromCharCode(44) + linearGradient;

    let index = {
        height: height + "vh",
        width: "auto",
        background: "linear-gradient" + String.fromCharCode(40) + linearGradient + String.fromCharCode(41) + String.fromCharCode(44) + "url" + String.fromCharCode(40) + image + String.fromCharCode(41),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        color: "white"
    };

    index = Object.assign(index, style);

    return createElement("div", { style: index, className: className }, <Container>{children}</Container>);
}

export default Background;
