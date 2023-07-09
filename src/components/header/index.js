import React from 'react'
import "./style.css";

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
            SmartSpend<i class="fi fi-sr-money-check-edit"></i>
            </div>
            <div className='header-button'>
                <a href='https://github.com/session' target="_blank"
                 rel='noopener norefrrer'
                 >
            <i class="devicon-github-original"></i>Star
          </a>
            </div>

            
        </div>
    </div>
  )
}

export default Header;