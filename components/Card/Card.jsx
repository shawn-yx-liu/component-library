import React from 'react'

export default function Card({icon, color = "blue", title, children}) {
    const styles = { backgroundColor: color};
    return (
        <div className={`card`}>
            {icon && <img src={icon} className="card-icon" style={styles}/>}
            {title && <h3 className="card-title">{title}</h3>}
            {children && <p className="card-text">{children}</p>}
        </div>
    );
}