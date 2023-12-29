import React from 'react'

export default function Badge({ shape="Square", color="gray", text="badge" }) {
    const shapeClass = `badge-${shape}`
    const colorClass = `badge-${color}`
    return (
        <div className={`badge ${shapeClass} ${colorClass}`}>
            {text}
        </div>
    )
}