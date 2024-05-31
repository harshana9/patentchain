import React from 'react'
import * as IoIcons from 'react-icons/io';
import { FaShoppingBag, FaRegRegistered, FaWpexplorer, FaUser, FaInfoCircle } from "react-icons/fa";

export const SideNavData = [
    {
        title: 'Patent Explorer',
        path: '/PatentList',
        icon: <FaWpexplorer />,
        cName: 'nav-text'
    },
    {
        title: 'Apply for Patent',
        path: '/ApplyPatent',
        icon: <FaRegRegistered />,
        cName: 'nav-text'
    },
    {
        title: 'Assigns',
        path: '/AssignHistory',
        icon: <FaShoppingBag/>,
        cName: 'nav-text'
    },
    {
        title: 'Licenses',
        path: '/LicenseHistory',
        icon: <IoIcons.IoIosClock/>,
        cName: 'nav-text'
    },
    /*{
        title: 'User',
        path: '/',
        icon: <FaUser />,
        cName: 'nav-text'
    },*/
    {
        title: 'About',
        path: 'http://patent-chain.free.nf',
        icon: <FaInfoCircle />,
        cName:'nav-text'
    },
]