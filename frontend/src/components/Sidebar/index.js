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
    let userId = useSelector(state => {
        if (!state.session.user) {
            return
        } else {
            return state.session.user.id;
        }
    })
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

    if (!userId) {
        return null
    }
    const SidebarData = [
        {

            title: 'Home',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        {

            title: 'My Project',
            path: `/projects`,
            icon: <AiIcons.AiOutlineCheckCircle />,
            cName: 'nav-text'
        },
        {

            title: 'Inbox',
            path: '/inbox',
            icon: <AiIcons.AiFillBell />,
            cName: 'nav-text'
        },
        {

            title: 'Teams',
            path: `/projectTeams/${userId}`,
            icon: <AiIcons.AiOutlineTeam />,
            cName: 'nav-text'
        },

    ]

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
                        <div className='annoyed'>
                            {SidebarData.map((item, index) => {
                                return (

                                    <li key={index} className={item.Cname}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                            <li className='nav-text'>
                                <a href='https://www.github.com/Csorini550'>
                                    <AiIcons.AiFillGithub />
                                    <span>Github</span>
                                </a>
                            </li>
                            <li className='nav-text'>
                                <a href='https://www.linkedin.com/'>
                                    <AiIcons.AiFillLinkedin />
                                    <span>Linkedin</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
    );
}

export default Sidebar;