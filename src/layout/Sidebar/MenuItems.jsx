import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SubMenu from './SubMenu'

const MenuItem = ({ menuActive, menu, index }) => {
    const [dropDown, setDropDown] = useState(false);
    const onHandleDropDown = (id) => {
        if (id === index) {
            setDropDown(!dropDown)
        } else {
            setDropDown(false)
        }
    }
    return (
        <>
            {menu?.submenu
                ?
                <>
                    <NavLink
                        to={menu.path}
                        key={menu.id}
                        className='text-white d-flex justify-content-between align-items-center'
                        onClick={() => onHandleDropDown(menu.id)}
                    >
                        <div className="d-flex align-items-center">
                            <span className='menuIcon d-flex justify-content-center align-items-center'>{menu.icon}</span>
                            <span className={`mx-2 ${menuActive ? 'text-warning' : 'opacity-0 invisible'}`}>{menu.title}</span>
                        </div>
                        <div className="arrowIcons">
                            {
                                menu.submenu && dropDown
                                    ?
                                    <span>{menu.closeIcon}</span>
                                    :
                                    menu.submenu
                                    &&
                                    <span>{menu.openIcon}</span>
                            }
                        </div>
                    </NavLink>
                    <SubMenu
                        submenu={menu.submenu}
                        dropDown={dropDown}
                        index={menu?.id}
                        menuActive={menuActive}
                    />
                </>
                :
                <NavLink
                    to={menu.path}
                    key={menu?.id}
                    className='d-flex justify-content-between align-items-center'
                >
                    <div className="navlinks d-flex align-items-center">
                        <span className='menuIcon d-flex justify-content-center align-items-center'>{menu.icon}</span>
                        <span className={`mx-2 ${menuActive ? '' : 'opacity-0 invisible'}`}>{menu.title}</span>
                    </div>

                </NavLink>
            }
        </>
    )
}

export default MenuItem

{/* <div className={`dropDown-menu ${dropDown ? 'block' : 'hidden'}`}>
                <NavLink
                    to={submenu.path}
                    key={index}
                    className='text-violet-50 relative flex justify-between items-center '>
                    <div className="navlinks flex items-center">
                        <span className='menuIcon flex justify-center items-center'>{submenu.icon}</span>
                        <span className={`ml-2 ${menuActive ? '' : 'opacity-0 invisible'}`}>{submenu.title}</span>
                    </div>
                </NavLink>
            </div> */}