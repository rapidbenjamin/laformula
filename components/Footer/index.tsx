"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathName = usePathname().slice(1);
  const msg = useTranslations('about');
  return (
      <footer
        className="footer wow fadeInUp z-10 bg-transparent w-[100%] absolute bottom-[50px] md:bottom-[70px] xl:bottom-[100px]"
        data-wow-delay=".1s"
        id="footer">
        <div className=" font-bold text-white flex justify-center items-center space-x-5 md:space-x-10 md:text-lg xl:space-x-20 xl:text-xl">
          <div className="">
            <Link 
              href={`/pdf/${encodeURIComponent("/terms.pdf")}`} 
              target="blank" 
              className="hover:text-primary">
              <div className="text-center "><u>{msg('terms')}</u></div>
            </Link>
          </div>
          {/* <div className="text-center ">{msg('cookies')}</div> */}
          <div className="">
            <Link 
              href={`/pdf/${encodeURIComponent("/disc.pdf")}`}
              target="blank">
              <div className="hover:text-primary text-center pr-4 xs:pr-0"><u>{msg('disclaimer')}</u></div>
            </Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
