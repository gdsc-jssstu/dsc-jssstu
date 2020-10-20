import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Ripples from 'react-ripples';

const Hamburger = (props) => {
    return (
        <div className='hamburger' onClick={props.onClick}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    )
}

const CloseNav = (props) => {
    return (
        <div className='closebtn' onClick={props.onClick}>
            <div className='lineone'></div>
            <div className='linetwo'></div>
        </div>
    )
}


const Navbar = (props) => {
    let [isOpen, setOpen] = useState(false);

    return (
        <div>
            <span className='nav-padding'></span>
            <nav className='navbar'>
                <Hamburger onClick={() => setOpen(!isOpen)} />
                <div className='navbar-brand-img-container'>
                    <img src="https://d33wubrfki0l68.cloudfront.net/58f92715e27dd6332fc56c0acde5d772734ec17d/b31ed/assets/img/logos/dsc_header.png" height="30" alt="DSC JSSSTU"></img>
                </div>
                <ul className={isOpen ? 'nav navopen' : 'nav'}>
                    <li><CloseNav onClick={() => setOpen(!isOpen)} /></li>
                    {props.children}
                </ul>
            </nav>
        </div>
    );
}

const NavLink = (props) => {
    return (
        <li className='navitem'>
            <Ripples>
                <Link to={props.to} className='navlink'>
                    <div className='navlink-container'>
                        {props.children}
                    </div>
                </Link>
            </Ripples>
        </li >
    );
}

export {
    Navbar,
    NavLink,
};