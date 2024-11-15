import React from 'react'
import { mobileNavigation } from './Header';
import { NavLink } from 'react-router-dom';
const MobileNav = () => {
  return (
  <section className='lg:hidden h-14 bg-black bg-opacity-80 fixed bottom-0 w-full z-40 backdrop-blur-3xl'>
    <div className='flex items-center justify-between h-full text-neutral-400'>
        {
            mobileNavigation.map((menu, index) => {
                return (
                    <NavLink key={menu.label+"mobilenavigation"}
                    to={menu.href}
                    className={({isActive})=> `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                        <div className='text-xl'>
                            {menu.icon}
                        </div>
                        <p className='text-sm pt-1'>{menu.label}</p>
                    </NavLink>
                )
            })
        }
    </div>
  </section>

  )
}

export default MobileNav;