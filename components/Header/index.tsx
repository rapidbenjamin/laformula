'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const router = useRouter();
  const pathname = usePathname();
  const msg = useTranslations('header');

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-[#333366] !bg-opacity-30 shadow-sticky backdrop-blur-sm !transition"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="#home"
                onClick={handleScroll}
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
                scroll={false}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={120}
                  height={30}
                  className="transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded-[10px] border-[2px] py-4 px-6 duration-300 border-body-color/20 bg-[#333366] bg-opacity-90 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12 text-xl">
                      <li className="group relative">
                        <Link
                            href="#service"
                            onClick={handleScroll}
                            className='flex py-2 text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0'
                          >
                            {msg('service')}
                          </Link>
                      </li>
                      <li className="group relative">
                        <Link
                            href="#about"
                            onClick={handleScroll}
                            className={`flex py-2 text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {msg('contact')}
                          </Link>
                      </li>
                      <li className="group relative">
                        <Link
                            href="#about"
                            onClick={handleScroll}
                            className={`flex py-2 text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {msg('aboutus')}
                          </Link>
                      </li>
                      <li className="group relative">
                        <a
                            onClick={() => handleSubmenu(100)}
                                className="flex cursor-pointer items-center justify-between py-2 text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                        >
                                {msg('languages')}
                          <span className="pl-3">
                            <svg width="15" height="14" viewBox="0 0 15 14">
                              <path
                                d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                        <div
                          className={`submenu relative bg-[#333366] bg-opacity-80 top-full left-0 rounded-md transition-[top] duration-300 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === 100 ? "block" : "hidden"
                            }`}
                            // style={{backgroundColor:"15,16,47,0.4"}}
                          > 
                          <a
                            href='/en' 
                            className="block rounded text-xl py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                            // scroll={false}
                          >
                            {msg('English')}
                          </a>
                          <a
                            href='/es'
                            className="block rounded text-xl py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                            // scroll={false}
                          >
                            {msg('Spanish')}
                          </a>
                        </div>
                      </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
