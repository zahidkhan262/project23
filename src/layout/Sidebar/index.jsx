import React from 'react'
import './Sidebar.css';
import { sidebarData as menuData } from '../../helpers/SidebarData'
import SidebarHeader from './SidebarHeader';
import MenuItem from './MenuItems';
const Sidebar = ({ menuActive }) => {

    return (
        <>
            <div className={`${menuActive ? 'sidebar' : 'sidebar sidebarActive'}`}>
                <SidebarHeader menuActive={menuActive} />
                <div className="sidebar-innerContainer">
                    <ul className="menu-bar">
                        {menuData?.map((menu) => <MenuItem
                            menu={menu}
                            menuActive={menuActive}
                            index={menu.id}
                            key={menu.id}
                        />
                        )}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Sidebar