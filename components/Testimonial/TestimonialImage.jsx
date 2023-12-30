import React from 'react'

export default function TestimonialImage({image, name, occupation, children}) {
    return (
        <div className="testimonial-with-image">
            <img src={image} className="testimonial-image"/>
            <div className="testimonial-with-image-container">
                <img src="../../images/quote-icon.svg"/>
                <div className="testimonial-text">
                    {children}
                </div>
                <p className="testimonial-name">{name}</p>
                <p className="testimonial-occupation">{occupation}</p>
            </div>
        </div>
    )
}