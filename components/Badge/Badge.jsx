import React from 'react'

export default function Badge({ shape="square", color="gray", children}) {
    const borderRadius = shape === "square" ? "4px" : "12px";
    let backgroundColor, textColor;
    switch (color) {
        case "gray":
            backgroundColor = "#f3f4f6";
            textColor = "#1f2937";
            break;
        case "red":
            backgroundColor = "#fee2e2";
            textColor = "#991b1b";
            break;
        case "yellow":
            backgroundColor = "#fef3c7";
            textColor = "#92400e";
            break;
        case "green":
            backgroundColor = "#d1fae5";
            textColor = "#065f46";
            break;
        case "blue":
            backgroundColor = "#dbeafe";
            textColor = "#1e40af";
            break;
        case "indigo":
            backgroundColor = "#e0e7ff";
            textColor = "#3730a3";
            break;
        case "purple":
            backgroundColor = "#ede9fe";
            textColor = "#5b21b6";
            break;
        case "pink":
            backgroundColor = "#fce7f3";
            textColor = "#9d174d";
            break;
    }

    return (
        <div className="badge" style={{borderRadius, backgroundColor, color: textColor}}>
            {children}
        </div>
    );
}