import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (
        <>
            <div className='nav_box'>
                <div className="logo">
                <a href="#">Medical Darpan</a>
                </div>
                <div className='tag_names'>
                    <a href="#">Home </a>
                    <a href="#">Products </a>
                    <a href="#">Distributors</a>
                    <a href="#">Maufacturers</a>
                    <a href="#">About Us </a>
                    <a href="#">Blog </a>
                </div>
                <div className="auth_route">
                    Login
                </div>
            </div>
        </>
    )
}

export default NavBar