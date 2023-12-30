import React from 'react'
import Testimonial from '../components/Testimonial/Testimonial'

export default function TestimonialsPage() {
    return (
        <div className="page">
            <h1 className="page-header">Testimonials</h1>
            <p className="page-subheading">Narrow/widen the browser window to switch between desktop/mobile displays.</p>
            <h2 className="page-label-row">With Picture</h2>
            <Testimonial
                image="../../images/testimonial-image.png"
                name="May Andersons"
                occupation="Workcation, CTO"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </Testimonial>
            <br/><br/>
            <h2 className="page-label-row">Without Picture</h2>
            <Testimonial
                logo="../../images/workcation.svg"
                name="May Andersons"
                occupation="Workcation, CTO"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </Testimonial>
        </div>
    )
}