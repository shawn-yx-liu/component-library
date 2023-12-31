import React from 'react'

export default function Tooltip({icon, variant, color, title, children}) {
    const [visible, setVisible] = React.useState(true);

    function closeTooltip() {
        setVisible(prevVisible => !prevVisible);
    }

    const hiddenClass = visible ? "" : "tooltip-hidden"

    let backgroundColor, titleColor, textColor;
    switch (color) {
        case "black":
            backgroundColor = variant === "bold" ? "#262626" : "#ffffff";
            titleColor = variant === "bold" ? "#ffffff" : "#111827";
            textColor = variant === "bold" ? "#c7c7c7" : "#6b7280";
            break;
        case "blue":
            backgroundColor = variant === "bold" ? "#1e40af" : "#e0e7ff";
            titleColor = variant === "bold" ? "#ffffff" : "#1e40af";
            textColor = variant === "bold" ? "#e8edff" : "#1c5189";
            break;
        case "pink":
            backgroundColor = variant === "bold" ? "#a9229b" : "#fff3fc";
            titleColor = variant === "bold" ? "#ffffff" : "#a9229b";
            textColor = variant === "bold" ? "#ffe9fd" : "#c7369e";
            break;
        case "green":
            backgroundColor = variant === "bold" ? "#47aa5d" : "#e7fff3";
            titleColor = variant === "bold" ? "#ffffff" : "#137a2a";
            textColor = variant === "bold" ? "#e3ffe9" : "#3c8c4e";
            break;
    }

    return (
        <div className={`tooltip tooltip-${variant} ${hiddenClass}`} style={{backgroundColor: backgroundColor}}>
            <div className="tooltip-header">
                <div style={{color: titleColor}}>
                    {icon}
                </div>
                <h1 className="tooltip-title" style={{color: titleColor}}>{title}</h1>
                <button onClick={closeTooltip} className="tooltip-close-btn" style={{color: titleColor}}>X</button>
            </div>
            <div className="tooltip-text" style={{color: textColor}}>
                {children}
            </div>
        </div>
    )
}