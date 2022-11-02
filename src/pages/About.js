
function About() {

    const text = Array.from("Lorem.");

    return (
        <div className="d-flex justify-content-center" style={{ height: 800 }}>
            {text.map((x, index) => {
                return (
                    <h3 key={index} data-scroll data-scroll-delay={index === 0 ? 0.02 : index * 0.02} data-scroll-speed={4}>{x}</h3>
                )
            })}
            
            <h1 data-scroll data-scroll-speed={-2} data-scroll-direction="horizontal" className="display-1">About us</h1>
        </div>
    );
}

export default About;
