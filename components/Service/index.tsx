"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useInView, animated } from "@react-spring/web";
import { useEffect } from "react";

const Service = () => {
  const t = useTranslations("service");
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0px",
    }
  );
  return (
    <>
      <section
        id="service"
        className="relative z-10 overflow-hidden pt-[150PX] pb-16 bg-[#0d0e2d]"
        style={{
            // backgroundImage: "url('/images/texture/Formula Lights.png')"
        }}
        >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div
              className="w-full px-4 rounded-lg bg-cover bg-no-repeat"
            >
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="w-full items-center lg:flex lg:space-x-12 xl:space-x-24 2xl:space-x-48">
                  <div className="text-wide text-white mb-20 w-full lg:!w-[50%] ">
                    <div className="w-1/2 lg:w-full mx-auto my-5 text-center font-bold text-2xl xs:text-3xl xs:tracking-wider sm:text-4xl sm:tracking-widest md:text-5xl xl:leading-[60px] 2xl:text-6xl">
                      <p className="">
                        {t("Title1")}
                      </p>
                      <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block md:block text-transparent bg-clip-text">
                        {t("Title2")}
                      </p>
                    </div>
                    <p className="mx-2 text-left leading-loose break-all text-lg xs:text-xl xs:leading-[35px] xs:tracking-wider sm:text-2xl sm:leading-[40px] sm:tracking-wider md:text-3xl md:pt-5 xl:leading-[40px] 2xl:text-4xl xl:tracking-normal xl:text-left 2xl:leading-[50px]">{t("para")}</p>
                  </div>
                  <span className="w-full lg:!w-[50%] opacity-1">
                    <img
                      src="/images/brand/Mobile Formula.svg"
                      alt="logo"
                      className="w-full"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
