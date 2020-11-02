import React,{useState} from 'react'
import NavBar from '../NavBar.js'
import Sidebar from '../SideBar/Sidebar.js'
import {HeroContainer, HeroContent, HeroH1, HeroItems,HeroP,HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen]=useState(false)
  const toggle=()=>{
      setIsOpen(!isOpen)
  }

    return (
        <HeroContainer>
            <NavBar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Finest Pizza</HeroH1>
                    <HeroP>Ready in 30mins</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
