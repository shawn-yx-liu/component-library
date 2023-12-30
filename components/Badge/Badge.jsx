import React from 'react'

export default function Badge({ shape="Square", color="gray", children}) {
    return (
        <div className={`badge badge-${shape} badge-${color}`}>
            {children}
        </div>
    )
}