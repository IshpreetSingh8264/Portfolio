import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMain = () => {
    return (
        <div className='navbar-main'>
            <div className='navbar-left'>
                <div className='navbar-left-text'>
                    <h1 className=''>Born Developer</h1>
                </div>
            </div>
            <div className='navbar-right'>
                <ul className='navbar-right-content'>
                    <li className='navbar-right-text'>
                        <h5 className=''><Link to={"/Portfolio/dashboard"}> Dashboard</Link></h5>
                    </li>
                    <li className='navbar-right-text'>
                        <h5 className=''> <Link to={"/Portfolio/MyJourney"}> My Journey</Link></h5>
                    </li>
                    <li className='navbar-right-text'>
                        <h5 className=''><a href=""> Contact</a></h5>
                    </li>
                    <li className='navbar-right-text'>
                        <h5 className=''><a href=""> Projects</a></h5>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default NavbarMain
