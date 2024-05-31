import React from 'react'
import { Link } from 'react-router-dom';
import { SideNavData } from './SideNavData';
import './SideNav.css';
import { IconContext } from 'react-icons';

function SideNav() {
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <nav className='nav-menu active'>
        <ul className='nav-menu-items' style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            {SideNavData.map((item, index) => {
                return (
                    <li key={index} className={item.cName} style={{ navbarNav: true, flexWrap: 'nowrap', marginLeft: 'auto' }}
                    >
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default SideNav