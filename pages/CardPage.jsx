import React from 'react'
import Card from '../components/Card/Card'

export default function CardPage() {
    return (
        <div className="page">
            <h1 className="page-header">Cards</h1>
            <div className="card-grid">
                <Card icon="../../images/cloud.svg" color="blue" title="Easy Deployment">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
                <Card icon="../../images/fire.svg" color="red" title="Emergency">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
                <Card icon="../../images/leaf.svg" color="green" title="Eco Friendly">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
                <Card icon="../../images/bell.svg" color="gold" title="Reminders">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
            </div>
        </div>
    )
}