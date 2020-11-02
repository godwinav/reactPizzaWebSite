import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarLink,sideBtnWrap,SidebarRoute,SidebarMenu} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
            <SidebarLink to='/'>Promotions</SidebarLink>
            <SidebarLink to='/Promotions'>New</SidebarLink>
            <SidebarLink to='/Desserts'>Deserts</SidebarLink>
            <SidebarLink to='/Specials'>Treats</SidebarLink>
            </SidebarMenu>
            <sideBtnWrap >
             <SidebarRoute to=''>Order Now</SidebarRoute>
            </sideBtnWrap>
        </SidebarContainer>
        
    )
}

export default Sidebar
