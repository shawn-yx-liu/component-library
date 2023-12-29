import React from 'react'
import Badge from "../components/Badge/Badge"

export default function BadgePage() {
    return (
        <div className="page">
            <h1 className="page-header">Badges</h1>
            <div className="badge-row">
                <h2 className="page-label">Square</h2>
                <Badge color="gray" text="Badge" shape="square"/>
                <Badge color="red" text="Badge" shape="square"/>
                <Badge color="yellow" text="Badge" shape="square"/>
                <Badge color="green" text="Badge" shape="square"/>
                <Badge color="blue" text="Badge" shape="square"/>
                <Badge color="indigo" text="Badge" shape="square"/>
                <Badge color="purple" text="Badge" shape="square"/>
                <Badge color="pink" text="Badge" shape="square"/>
            </div>
            <div className="badge-row">
                <h2 className="page-label">Pill</h2>
                <Badge color="gray" text="Badge" shape="pill"/>
                <Badge color="red" text="Badge" shape="pill"/>
                <Badge color="yellow" text="Badge" shape="pill"/>
                <Badge color="green" text="Badge" shape="pill"/>
                <Badge color="blue" text="Badge" shape="pill"/>
                <Badge color="indigo" text="Badge" shape="pill"/>
                <Badge color="purple" text="Badge" shape="pill"/>
                <Badge color="pink" text="Badge" shape="pill"/>
            </div>
        </div>
    )
}