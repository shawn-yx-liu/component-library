import React from 'react'

export default function TestimonialNoImage({logo, name, occupation, children}) {
    return (
        <div className="testimonial-no-image">
            <img src={logo} className="testimonial-logo"/>
            <div className="testimonial-text">
                {children}
            </div>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-occupation">{occupation}</p>
        </div>
    )
}