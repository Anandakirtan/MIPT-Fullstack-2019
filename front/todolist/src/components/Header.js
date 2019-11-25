import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <div id='inner-header'>
                <span className="header-item" id="title">Ежедневник</span>
                <span className="header-item" id="settings_button">Тут будет шестеренка</span>
            </div>
        </header>
    )
}

export default Header