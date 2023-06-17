import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css';
const SubMenu = ({ submenu, dropDown, index, menuActive }) => {
    return (
        <>
            {
                submenu?.map((sub, id) => {
                    return (
                        <div className={`dropDown-menu hidden ${dropDown ? '' : 'active'}`} key={id}>
                            <NavLink
                                to={sub.path}
                                key={index}
                                className='text-dark d-flex justify-content-between align-items-center '>
                                <div className="navlinks d-flex align-items-center">
                                    <span className='menuIcon d-flex justify-content-center align-items-center'>{sub.icon}</span>
                                    <span className={`mx-2 ${menuActive ? '' : 'opacity-0 invisible'}`}>{sub.title}</span>
                                </div>
                            </NavLink>
                        </div>

                    )
                })
            }
        </>
    )
}

export default SubMenu