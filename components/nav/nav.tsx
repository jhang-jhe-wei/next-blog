import Link from 'next/link'
import NavItem from './nav_item'
import NavBtnItem from './nav_btn_item'
import NavIconItem from './nav_icon_item'
import NavHamburger from './nav_hamburger_item'
import NavMobileMenu from './nav_mobile_menu'
import { useState } from 'react'

export default function Nav():React.ReactElement{
  const [reveal, setReveal] = useState(false);
  return (
    <nav className="sticky top-0 z-30 px-10 py-6 bg-light dark:bg-primary bg-opacity-60 dark:bg-opacity-60 backdrop-blur dark:backdrop-blur print:hidden">
      <div className="flex items-center justify-between mx-auto">
        <Link href="/" ><a className="text-2xl text-primary dark:text-white hover:no-underline">Wells</a>
        </Link>
        <div className="items-center hidden sm:flex">
          <NavItem href="/portfolio">作品集</NavItem>
          <NavItem href="/about">經歷</NavItem>
          <NavItem href="https://blog.wells.tw" newTab={true} >部落格</NavItem>
          <NavBtnItem href="mailto:jhang0912407249@gmail.com">聯絡我</NavBtnItem>
          <NavIconItem/>
        </div>
        <div className="flex items-center justify-between w-36 sm:hidden">
          <NavIconItem/>
          <div className="z-50">
            <NavHamburger reveal={reveal} setReveal={setReveal}/>
          </div>
        </div>
      </div>
      <NavMobileMenu reveal={reveal}/>
    </nav>
  )
}
