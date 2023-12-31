import React from 'react'

export default function Banner({title = "", variant = "success", children}) {
    let imageSrc, backgroundColor, titleColor, textColor;
    switch(variant){
        case "success":
            imageSrc = "../../images/check-circle.svg";
            backgroundColor = "#ecf5f5";
            titleColor = "#065f46";
            textColor = "#047857";
            break;
        case "warning":
            imageSrc = "../../images/exclamation.svg";
            backgroundColor = "#fffbeb";
            titleColor = "#92400e";
            textColor = "#b45309";
            break;
        case "error":
            imageSrc = "../../images/x-circle.svg";
            backgroundColor = "#fef2f2";
            titleColor = "#92400e";
            textColor = "#b45309";
            break;
        case "neutral":
            imageSrc = "../../images/icon.svg";
            backgroundColor = "#eff6ff";
            titleColor = "#1e40af";
            textColor = "#1c51b9";
            break;
    }

    return (
        <div className="banner" style={{backgroundColor}}>
            <img src={imageSrc} className="banner-icon"/>
            <div className="banner-text-wrapper">
                <p className="banner-title" style={{color: titleColor}}>{title}</p>
                {children && <p className="banner-text" style={{color: textColor}}>{children}</p>}
            </div>
        </div>
    );
}