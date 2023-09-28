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
      <section
        id="service"
        className="relative z-10 overflow-hidden pt-[150PX] pb-16 bg-[#0d0e2d]"
        style={{
            // backgroundImage: "url('/images/texture/Formula Lights.png')"
        }}>
          <div className="-mx-4 flex flex-wrap ">
            <div
              className="w-full px-4 rounded-lg bg-cover bg-no-repeat"
            >
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="w-full items-center lg:flex">
                  <div className="text-white text-center whitespace-pre-line tracking-wide mb-20 w-full lg:!w-[50%] ">
                    <div className="w-1/2 mx-auto my-5 text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:leading-normal 2xl:text-6xl">
                      <p className="">
                        {t("Title1")}
                      </p>
                      <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block md:block text-transparent bg-clip-text">
                        {t("Title2")}
                      </p>
                    </div>
                    <p className=" text-xl font-bold mx-[24px] tracking-normal md:mx-auto md:w-3/4 lg:text-2xl 2xl:text-3xl">{t("para")}</p>
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
      </section>
  );
};

export default Service;
