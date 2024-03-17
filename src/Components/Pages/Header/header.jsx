import './header.scss'
import Logo from '../../Assets/Img/Logo.png'
import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

function Header() {
    const xref = React.useRef()
    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="#link" className="header__link">
                        <img src={Logo} alt="logo" className="header__pic" width={131} height={40} />
                    </a>
                    <ul className="header__list" ref={xref}>
                        <li className='exit'><button type='button' onClick={() => {
                            xref.current.classList.remove('block')
                        }}>x</button></li>
                        <li className="header__item">
                            <a href="#link" className="header__term">Features</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__term">Pricing</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__term">Blog</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__term">Docs</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__term">Changelog</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__term">We're hiring</a>
                        </li>
                    </ul>
                    <button type='button' className="header__btn">
                        <SignedOut >
                            <SignInButton className='sig__in'/>
                        </SignedOut>
                        <SignedIn >
                            <UserButton />
                        </SignedIn>
                    </button>
                    <button className="menu" type='button' onClick={() => {
                        xref.current.classList.add('block')
                    }}>==</button>
                </div>
            </header>
        </>
    )
}

export default Header