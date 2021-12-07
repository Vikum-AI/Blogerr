import React from 'react'
import logo from '../Assets/Blogerr-logo-white.png'
import '../Styles/header.css'

export default function header() {
    return (
        <div className='header'>
            
            <img src = { logo } />

            <nav>

                <ul>

                    <li> <a href="#"> Home </a> </li>
                    <li> <a href="#"> Our Story </a> </li>
                    
                    <li> <a href="#"> Login </a> </li>

                    <button> Create Account </button>
                    
                </ul>

            </nav>

        </div>
    )
}
