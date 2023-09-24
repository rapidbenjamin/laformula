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
        className="footer wow fadeInUp z-10 pt-8 pb-8 bg-transparent w-[100%] absolute bottom-10 text-xl"
        data-wow-delay=".1s"
        id="footer">
        <div className="container text-white flex items-center justify-center space-x-20">
          <span>Terms & Conditions</span>
          <span>Cookies Policy</span>
          <span>Disclaimer</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
