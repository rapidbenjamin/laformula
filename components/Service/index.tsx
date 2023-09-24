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
        id="home"
        className="relative z-10 overflow-hidden pt-16 pb-16 bg-black"
        style={{
            backgroundColor: "#0d0e2d"
            // backgroundImage: "url('/images/texture/texture.png')"
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
                <div className="w-full items-center lg:flex lg:space-x-24">
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="text-base lg:text-3xl text-white lg:text-left mb-12 w-full lg:!w-[40%]"
                  >
                    <p className=" text-2xl font-light lg:text-7xl lg:font-bold">
                      {t("Title1")}
                    </p>
                    <p className=" text-2xl font-light lg:text-7xl lg:font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                      {t("Title2")}
                    </p>
                    <p className="pt-4 mx-auto">{t("para")}</p>
                  </animated.div>
                  <animated.span
                    ref={ref}
                    style={springs}
                    className="w-full lg:!w-[60%] opacity-0"
                  >
                    <Image
                      src="/images/brand/Mobile Formula.svg"
                      alt="logo"
                      sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        width={500}
                        height={500}
                    />
                  </animated.span>
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
