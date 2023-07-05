import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/img/logo.png'

import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import Container from './Container'

export default function Header() {
  return (
    <Container>
      <header className="header w-[100%] h-[60px] px-[10px] ">
        <nav className="header-menu h-[100%] flex justify-between items-center">
          <div className="menu-logo h-[100%] ">
            <div className="logo-img h-[100%] flex justify-center items-center gap-2">
              <Image src={logo} alt="logo image" className="w-[38px] h-[26px] " />
              <Link className="uppercase" href="/">
                test task
              </Link>
            </div>
          </div>
          <div className="menu-btns flex gap-3 text-center max-[370px]:gap-1">
            <ButtonPrimary {...{ title: 'Users', anchor: '#usersList' }} />
            <ButtonPrimary {...{ title: 'Sign up', anchor: '#name' }} />
          </div>
        </nav>
      </header>
    </Container>
  )
}
