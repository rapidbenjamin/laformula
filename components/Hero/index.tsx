"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useInView, animated } from "react-spring";

const Hero = () => {
  
  const msg = useTranslations("hero");

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[200px] lg:pt-[200px] bg-cover bg-no-repeat bg-center" style={{
          backgroundImage: "url('/images/texture/texture.png')", 
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 bg-cover bg-no-repeat" >
              <div className="mx-auto text-center">
                <div className="relative lg:space-x-24 text-center text-white font-bold text-xl leading-10 tracking-wide">
                  <div className="xs:text-2xl xs:leading-[40px] xs:pt-5 sm:text-3xl sm:leading-[50px] md:text-4xl md:leading-[60px] xl:text-5xl xl:leading-[70px] xl:pt-1 2xl:pt-5">{msg("para1")}
                    <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                    {msg("para2")}
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-[35vh] sm:mt-[30vh] md:mt-[20vh] xl:mt-[5vh]">
                      <img
                        src="/images/hero/Global.png"
                        alt="Global"
                        className="w-full"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
