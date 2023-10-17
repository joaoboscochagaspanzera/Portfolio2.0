import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { github, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const shouldHideText = window.innerWidth < 973;
  return (
    <nav
      className={`${styles.paddingX} w-full flex
      items-center fixed top-0 z-20 bg-primary bg-opacity-95`}
    >
      <div className="w-full flex justify-between
      items-center max-w-7x1 mx-auto">
        <div className="flex">
          <Link
            to='/'
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-25 h-20 object-contain" />
            {!shouldHideText && (
              <p className="text-white text-[24px] font-bold cursor-pointer">João Bosco</p>
            )}
          </Link>

          <div
            onClick={() => window.open('https://www.linkedin.com/in/joaoboscodev/', "_blank")}
            className='flex justify-center cursor-pointer mr-4 ml-10'
            >
            <img
              src={linkedin}
              alt='source code'
              className='w-8 object-contain white-bg'
            />
          </div>

          <div
            onClick={() => window.open('https://github.com/joaoboscodev', "_blank")}
            className='flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-8 object-contain'
            />
          </div>
        </div>


        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar