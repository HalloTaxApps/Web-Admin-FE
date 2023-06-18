import React, { useState } from "react";
import logo from "../../Assets/HalloTax.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-5 bg-[#263238] h-16">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div
              className="flex flex-row item-center gap-x-3"
            >
                    <img src={logo} alt="Mirai" className='h-5' />
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="flex items-center text-white hover:opacity-75"
                  href="#pablo"
                >
                 <span className="ml-2">Admin</span>
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
};


export default Navbar