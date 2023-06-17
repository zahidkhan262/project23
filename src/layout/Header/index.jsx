import React from 'react';
import { faBars, faSearch, faSignIn, faSignOut, faTimes, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/images/logo.png'
import SidebarHeader from '../Sidebar/SidebarHeader';
import { DASHBOARD } from '../../helpers/RoutesURL';
import ProfileCard from '../../components/profile/ProfileCard';
const Header = ({ toggleSidebar, menuActive }) => {

    return (
        <>
            <div className='header-nav sticky-top  d-flex justify-content-between aling-items-center z-30' >
                <div className="p-1 d-flex align-items-center">
                    <NavLink to={DASHBOARD} className={`d-flex align-items-center`}>
                        <FontAwesomeIcon icon={faUniversalAccess} className='text-dark logo-icon' />
                        <span className={`logo-text text-dark mx-2`}>A.T<strong style={{ color: 'crimson' }}>.Links</strong></span>
                    </NavLink>
                </div>
                <div className={`bar-icons ${menuActive ? 'bar-icons-active' : 'bar-icons'} text-dark fs-4 cursor-pointer`}>
                    <span onClick={toggleSidebar}>{menuActive ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} className="text-dark" />}</span>
                </div>
                <div className={`header-search`} >
                    <FontAwesomeIcon icon={faSearch} className='search-icon' />
                    <input type="text" name="serch" id="search" placeholder='Search...' />
                </div>
                <ProfileCard />
            </div>

        </>
    )
}

export default Header