"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useInView, PickAnimated, animated } from "react-spring";

const Management = () => {
  const t = useTranslations("sectionThree");
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
  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 80,
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
  return (
      <section
        id="management"
        className="relative z-10 overflow-hidden lg:pt-[100px] lg:pb-16" >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 rounded-lg bg-cover bg-no-repeat" >
              <div className="wow fadeInUp mx-auto text-center">
                <div className="flex flex-col lg:flex-row px-10 md:p-5 xl:p-20 ">
                  <div 
                    className=" w-full sm:w-4/5  lg:w-1/2 bg-[#0d0e2d] border-4 border-[#373856] rounded-[32px] pt-6 mx-auto my-5 lg:flex-1 lg:m-2 xl:mx-10 2xl:mx-20 " >
                    <div className="flex items-center w-[40px] h-[40px] 2xl:w-[80px] 2xl:h-[80px] mx-auto">
                      <img
                        src="/images/brand/Global Realistic.png"
                        alt="logo"
                        className="w-full"
                      />
                    </div>
                    <div className="text-white text-center whitespace-pre-line tracking-wide mb-5 w-full pt-4">
                      <div className="text-xl sm:text-[22px] md:text-2xl xl:text-3xl 2xl:text-4xl">
                        <p className="">
                          {t("Title1")}
                        </p>
                        <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                          {t("Title2")}
                        </p>
                      </div>
                      <p className="pt-2 mx-2 font-bold text-md tracking-tight leading-tight md:text-lg lg:w-4/5 lg:mx-auto xl:w-5/6 2xl:text-xl">{t("para1")}</p>
                    </div>
                  </div>
                  <div className=" w-full sm:w-4/5 lg:w-1/2 bg-[#0d0e2d] border-4 border-[#373856] rounded-[32px] pt-6 mx-auto my-5 md:my-10 lg:flex-1 lg:m-2 xl:mx-10 2xl:mx-20">
                    <div className="flex items-center justify-center w-[40px] h-[40px] 2xl:w-[80px] 2xl:h-[80px] mx-auto">
                      <img
                        src="/images/brand/Dolar Icon.png"
                        alt="logo"
                        className="w-full"
                      />
                    </div>
                    <div className="text-white text-center whitespace-pre-line tracking-wide mb-5 w-full pt-4">
                      <div className="flex justify-center text-xl sm:text-[22px] md:text-2xl xl:text-3xl 2xl:text-4xl">
                        <p className="">
                          {t("Title3")}
                        </p>
                        <p className="ml-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                          {t("Title4")}
                        </p>
                      </div>
                      <p className="pt-2 mx-2 font-bold text-md tracking-tight leading-tight md:text-lg lg:w-4/5 lg:mx-auto xl:w-5/6 xl:pt-5 2xl:text-xl">{t("para2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
  );
};

export default Management;
