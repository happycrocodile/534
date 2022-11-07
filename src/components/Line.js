function Line({ start }) {
    return <hr data-scroll data-scroll-speed={-2} data-scroll-direction="horizontal" className={start ? null : "mx-auto mx-lg-0"} style={{ width: 160, marginBottom: 40 }} />;
}

export default Line;
