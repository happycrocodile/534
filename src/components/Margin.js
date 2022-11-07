import { createElement } from "react";

const Top = ({ ...props }) => createElement("div", { ...props, style: Object.assign({ marginTop: 20 }, props.style) }, props.children);
const Start = ({ ...props }) => createElement("div", { ...props, style: Object.assign({ marginRight: 20 }, props.style) }, props.children);
const End = ({ ...props }) => createElement("div", { ...props, style: Object.assign({ marginLeft: 20 }, props.style) }, props.children);
const Bottom = ({ ...props }) => createElement("div", { ...props, style: Object.assign({ marginBottom: 20 }, props.style) }, props.children);

export default Object.assign(Bottom, {
    Top,
    Start,
    End,
    Bottom
});
