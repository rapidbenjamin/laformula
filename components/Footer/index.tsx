"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathName = usePathname().slice(1);
  return (
    <>
      <footer
        className="footer wow fadeInUp z-10 bg-transparent w-[100%] absolute bottom-[50px] md:bottom-[70px] xl:bottom-[100px]"
        data-wow-delay=".1s"
        id="footer">
        <div className="text-white flex justify-center items-center space-x-5 md:space-x-10 md:text-lg xl:space-x-20 xl:text-xl">
          <div className="">
            <Link href="" target="blank" className="hover:text-primary">
              <div className="text-center "><u>Terms & Conditions</u></div>
            </Link>
          </div>
          <div className="text-center ">Cookies Policy</div>
          <div className="">
            <Link href="" >
              <div className="hover:text-primary text-center pr-4 xs:pr-0"><u>Disclaimer</u></div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
