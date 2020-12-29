import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Sidebar.css';
import { SidebarData } from './SidebarData'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import './Sidebar.css'
import { IconContext } from 'react-icons'

function Sidebar() {
    const [navbar, setNavbar] = useState(false);

    const showNav = () => {
        const newNavbar = !navbar
        setNavbar(newNavbar)
        const main = document.getElementById('main')
        if (newNavbar) {
            main.style.marginLeft = '250px'
        } else {
            main.style.marginLeft = '0px'
        }

    }

    return (
        <IconContext.Provider value={{ color: 'black' }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showNav} />
                </Link>
                <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showNav}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.Cname}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                    {/* <a href={item.aref}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a> */}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
    );
}

export default Sidebar;