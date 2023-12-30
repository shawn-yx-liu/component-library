import React from 'react'
import TestimonialImage from './TestimonialImage';
import TestimonialNoImage from './TestimonialNoImage'

export default function Testimonial({image="", logo="", name="", occupation="", children=null}) {
    let testimonialComponent = image ? (
        <TestimonialImage image={image} name={name} occupation={occupation}>
            {children}
        </TestimonialImage>
    ) : (
        <TestimonialNoImage logo={logo} name={name} occupation={occupation}>
            {children}
        </TestimonialNoImage>
    );

    return (
        <div className="testimonial">
            {testimonialComponent}
        </div>
    )
}