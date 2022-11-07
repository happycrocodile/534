export function BackgroundImage(props) {

    let index = "rgba(0, 0, 0, 0.2)";

    index += String.fromCharCode(44) + index;

    let style = {
        height: "100vh",
        width: "auto",
        background: "linear-gradient" + String.fromCharCode(40) + index + String.fromCharCode(41) + String.fromCharCode(44) + "url" + String.fromCharCode(40) + props.image + String.fromCharCode(41),
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    };

    return <div {...props} style={style}>{props.children}</div>;
};
