import React from 'react'
import Badge from "../components/Badge/Badge"

export default function BadgePage() {
    return (
        <div className="page">
            <h1 className="page-header">Badges</h1>
            <div className="badge-grid">
                <h2 className="page-label-row">Square</h2>
                <div className="badge-row">
                    <Badge color="gray" shape="square">Badge</Badge>
                    <Badge color="red" shape="square">Badge</Badge>
                    <Badge color="yellow" shape="square">Badge</Badge>
                    <Badge color="green" shape="square">Badge</Badge>
                    <Badge color="blue" shape="square">Badge</Badge>
                    <Badge color="indigo" shape="square">Badge</Badge>
                    <Badge color="purple" shape="square">Badge</Badge>
                    <Badge color="pink" shape="square">Badge</Badge>
                </div>

                <h2 className="page-label-row">Pill</h2>
                <div className="badge-row">
                    <Badge color="gray" shape="pill">Badge</Badge>
                    <Badge color="red" shape="pill">Badge</Badge>
                    <Badge color="yellow" shape="pill">Badge</Badge>
                    <Badge color="green" shape="pill">Badge</Badge>
                    <Badge color="blue" shape="pill">Badge</Badge>
                    <Badge color="indigo" shape="pill">Badge</Badge>
                    <Badge color="purple" shape="pill">Badge</Badge>
                    <Badge color="pink" shape="pill">Badge</Badge>
                </div>
            </div>
        </div>
    )
}