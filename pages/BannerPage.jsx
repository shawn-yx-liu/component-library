import React from 'react'
import Banner from '../components/Banner/Banner'

export default function BannerPage() {
    return (
        <div className="page">
            <h1 className="page-header">Banners</h1>
            <div className="banner-grid">
                <div></div>
                <h2 className="page-label-col">Multi Line</h2>
                <h2 className="page-label-row">Success</h2>
                <Banner title="Congratulations!" variant="success">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
                <h2 className="page-label-row">Warning</h2>
                <Banner title="Attention" variant="warning">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                </Banner>
                <h2 className="page-label-row">Error</h2>
                <Banner title="There is a problem with your application" variant="error">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                </Banner>
                <h2 className="page-label-row">Neutral</h2>
                <Banner title="Update Available" variant="neutral">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
                <div></div>
                <h2 className="page-label-col">Single Line</h2>

                <h2 className="page-label-row">Success</h2>
                <Banner title="Congratulations!" variant="success"></Banner>
                <h2 className="page-label-row">Warning</h2>
                <Banner title="Attention" variant="warning"></Banner>
                <h2 className="page-label-row">Error</h2>
                <Banner title="There is a problem with your application" variant="error"></Banner>
                <h2 className="page-label-row">Neutral</h2>
                <Banner title="Update Available" variant="neutral"></Banner>
            </div>
        </div>
    )
}