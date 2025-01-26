import React from 'react'
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router';

const Navbar = () => {

    const nav = useNavigate();

    const navLinks = [
        {title: "Home", link: "/"},
        {title: "Payments", link: "/#"},
        {title: "Reviews", link: "/#"},
        {title: "Contact Us", link: "/#"},
    ];



  return (
    <nav className='flex py-2 items-center justify-between h'>
        <div>
            <img 
                src="https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-icon-download-in-png-blend-fbx-gltf-file-formats--dollar-currency-cash-pack-business-icons-7192163.png?f=webp" 
                alt="logo"
                className='h-14 bg-black rounded-full' 
            />
        </div>

        <div className='hidden lg:flex lg:items-center lg:gap-10'>
            {
                navLinks.map((item)=> (
                    <div 
                    key={item.title}
                    href={item.link}
                    className='cursor-pointer hover:text-gray-600'
                    >
                        {item.title}
                    </div>
                ))
            }
        </div>

        <div className='hidden lg:block'>
            <Button
                title={"Login"}
                onClick= {()=> nav('/login')}
            />
        </div>

        <div className='lg:hidden'>
            <GiHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar