import React from 'react'
function Header(props) {
    return (
        <div>
            <header className="header">{props.heading}</header>
        </div>
    )
}
export default Header