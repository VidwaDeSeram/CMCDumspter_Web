import React, { useState } from 'react';
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

function StaffDashboard() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='body'>
            <header>
                <div class="navbar">
                    <div class="logo">
                        <Link to="/">CMC<font color="white">Dumpster</font></Link>
                    </div>


                    <ul class="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/report">Report Form</Link></li>
                    </ul>
                    <Link className='userprofile-largescreen' to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                    <div class="app__navbar-smallscreen">

                        <Link className='userprofile-smallscreen' to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
                        {toggleMenu && (
                            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                <AiFillCloseCircle fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                                <ul class="smallscreen-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/report">Report Form</Link></li>
                                </ul>
                            </div>
                        )}

                    </div>

                </div>
            </header>
            <div class="captainDashboard">
                <h1>GREEN TASK FORCE DASHBOARD</h1>
                <div class="link1">
                    <Link to="/report" id="link1">Report Form</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StaffDashboard