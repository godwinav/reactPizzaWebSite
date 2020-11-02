import React from 'react'
import Sidebar from '../SideBar/Sidebar.js'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements.js'



const NavBar = ({toggle}) => {
 
    return (
        <>
           <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toggle}>
                <p onClick={toggle} id='menu' >Menu</p>
                <Bars/>
            </NavIcon>
           </Nav>
        </>
    )
}

export default NavBar
