import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideNavData = [
    {
        title: 'Patent Explorer',
        path: '/PatentList',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Apply for Patent',
        path: '/ApplyPatent',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Assigns',
        path: '/AssignHistory',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Licenses',
        path: '/LicenseHistory',
        icon: <IoIcons.IoIosClock/>,
        cName: 'nav-text'
    },
    {
        title: 'User',
        path: '/',
        icon: <IoIcons.IoIosBulb/>,
        cName: 'nav-text'
    },
]