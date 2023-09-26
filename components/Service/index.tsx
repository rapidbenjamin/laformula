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
        className="relative z-10 overflow-hidden pt-16 pb-16 bg-[#0d0e2d]"
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
                  <div className="text-wide text-white mb-12 w-full lg:!w-[40%] md:mb-2 lg:ml-2">
                    <div className="w-1/2 mx-auto my-10 text-center lg:w-full xs:w-full 2xs:w-full 2xs:my-5 md:my-[50px]">
                      <p className="text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl sm:tracking:wider md:text-5xl md:text-center lg:text-left lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                        {t("Title1")}
                      </p>
                      <p className="text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl sm:tracking:wider md:text-5xl md:text-center lg:text-left lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block md:block text-transparent bg-clip-text">
                        {t("Title2")}
                      </p>
                    </div>
                    <p className="mx-auto py-5 text-justify leading-loose break-all md:text-3xl md:leading-[3rem] sm:text-2xl xs:text-xl 2xs:text-lg ">{t("para")}</p>
                  </div>
                  <span className="w-full lg:!w-[60%] opacity-1">
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
