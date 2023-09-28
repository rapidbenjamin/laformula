"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { animated, useInView } from "react-spring";

const Solution = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -80,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "0% 0px",
    }
  );
  const t = useTranslations("sectionTwo");
  return (
      <section id="solution" className="relative z-10 pt-0 overflow-hidden pb-16" >
        <div className="-mx-4 flex flex-wrap" >
          <div className="w-full px-4 rounded-lg bg-cover bg-no-repeat" >
            <div
              className="wow fadeInUp mx-auto text-center"
              data-wow-delay=".3s" >
              <div className="w-full items-center">
                <div className="text-2xl text-white text-center tracking-wide whitespace-pre-line mb-10 ">
                  <div className="w-full my-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl ">
                    <p className="">
                      {t("Title1")}
                    </p>
                    <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                      {t("Title2")}
                    </p>
                  </div>
                  <p className="font-bold text-xl mx-[24px] md:w-3/4 md:mx-auto lg:text-2xl xl:w-3/5 2xl:text-3xl">
                    {t("para")}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:mt-[100px] gap-3 md:gap-6 xl:gap-10 lg:mt-[150px]">
                  <div className="border-solid rounded-[20px] border-4 border-[#373856] bg-[#0d0e2d] mx-auto p-5 md:p-10 w-1/3 sm:w-[30%] md:w-[25%] xl:p-10 2xl:p-20">
                    <img
                      src="/images/brand/Formula Gears.svg"
                      alt="logo"
                      className=""
                    />
                  </div>
                  <div className="border-solid rounded-[20px] border-4 border-[#373856] bg-[#0d0e2d] mx-auto p-5 md:p-10 w-1/3 sm:w-[30%] md:w-[25%] xl:p-10 2xl:p-20">
                    <img
                      src="/images/brand/Formula Idea.svg"
                      alt="logo"
                      className=""
                    />
                  </div>
                  <div className="border-solid rounded-[20px] border-4 border-[#373856] bg-[#0d0e2d] mx-auto p-5 md:p-10 w-1/3 sm:w-[30%] md:w-[25%] xl:p-10 2xl:p-20">
                    <img
                      src="/images/brand/Formula Business.svg"
                      alt="logo"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Solution;
