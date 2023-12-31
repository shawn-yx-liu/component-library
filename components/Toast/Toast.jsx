import React from 'react'

export default function Toast({visible, variant, children}) {
    const variantUpperCase = variant.charAt(0).toUpperCase() + variant.slice(1)
    const hiddenClass = visible ? "" : "toast-hidden"
    let imageSrc, backgroundColor, titleColor, textColor;
    switch(variant){
        case "success":
            imageSrc = "../../images/check-circle-thin.svg";
            backgroundColor = "#ecf5f5";
            titleColor = "#065f46";
            textColor = "#047857";
            break;
        case "warning":
            imageSrc = "../../images/exclamation-circle-thin.svg";
            backgroundColor = "#fffbeb";
            titleColor = "#92400e";
            textColor = "#b45309";
            break;
        case "information":
            imageSrc = "../../images/information-circle-thin.svg";
            backgroundColor = "#eff6ff";
            titleColor = "#1e40af";
            textColor = "#1c51b9";
            break;
        case "error":
            imageSrc = "../../images/x-circle-thin.svg";
            backgroundColor = "#fef2f2";
            titleColor = "#92400e";
            textColor = "#b45309";
            break;
    }

    return (
        <div className={`toast ${hiddenClass}`} style={{backgroundColor}}>
            <img src={imageSrc} className="toast-icon"/>
            <div className="toast-text-wrapper">
                <p className="toast-title" style={{color: titleColor}}>{variantUpperCase}</p>
                {children && <p className="toast-text" style={{color: textColor}}>{children}</p>}
            </div>
        </div>
    )
}