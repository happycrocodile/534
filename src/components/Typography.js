import { createElement } from "react";

export const H1 = (props) => createElement("h1", { ...props }, props.children);
export const H2 = (props) => createElement("h2", { ...props }, props.children);
export const H3 = (props) => createElement("h3", { ...props }, props.children);
export const H4 = (props) => createElement("h4", { ...props }, props.children);
export const H5 = (props) => createElement("h5", { ...props }, props.children);
export const H6 = (props) => createElement("h6", { ...props }, props.children);
export const P = (props) => createElement("p", { ...props }, props.children);
export const Typography = (props) => createElement("span", { ...props }, props.children);

export default Object.assign(Typography, { H1, H2, H3, H4, H5, H6, P });
