import React from "react"
import { MenuContext } from "./Menu"

export default function MenuItem({ children, onClick = () => {} }) {
    const { toggleOpen } = React.useContext(MenuContext)

    function handleClick() {
        toggleOpen()
        onClick()
    }
    
    return (
        <div className="menu-item" onClick={handleClick}>
            {children}
        </div>
    )
}