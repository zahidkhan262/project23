import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { DASHBOARD } from '../../helpers/RoutesURL'

const SidebarHeader = ({ menuActive }) => {
    return (
        <>
            <div className="logo-section d-flex align-items-center">
                <NavLink to={DASHBOARD}>
                    <FontAwesomeIcon icon={faUniversalAccess} className='text-dark logo-icon' />
                    <span className={`logo-text text-dark ${menuActive ? 'inline-block' : 'visually-hidden'}`}>A.T<strong style={{ color: 'crimson' }}>.Links</strong></span>
                </NavLink>
            </div>
        </>
    )
}

export default SidebarHeader