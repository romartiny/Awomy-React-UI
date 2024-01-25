import React from 'react';
import screenshot from '../../app/assets/images/map-screenshot.png'
import Container from "../Container";

const Testimonial = () => {
    return (
        <section className="relative bg-black z-50">
            <Container className="py-12 sm:py-16">
                <img src={screenshot ?? undefined} className="w-full object-cover object-center rounded-2xl" alt="map" />
            </Container>
        </section>
    );
};

export default Testimonial;