
import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
    {

        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {

        title: 'My Tasks',
        path: '/tasks',
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

        title: 'Github',
        path: 'https://www.github.com/Csorini550',
        icon: <AiIcons.AiFillGithub />,
        cName: 'nav-text'
    },
    {

        title: 'Linkedin',
        path: 'https://www.linkedin.com/',
        icon: <AiIcons.AiFillLinkedin />,
        cName: 'nav-text'
    }

]