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
        className="relative z-10 overflow-hidden lg:pt-[200px] pt-[100px] lg:pb-16" >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 rounded-lg bg-cover bg-no-repeat" >
              <div className="wow fadeInUp mx-auto text-center">
                <div className="flex flex-col md:flex-row p-10 md:p-5 xl:p-20">
                  <div 
                    className=" w-full lg:w-1/2 bg-[#0d0e2d] border-4 border-[#373856] rounded-[32px] pt-12 mx-auto my-5 md:flex-1 md:m-2 xl:mx-10 2xl:mx-20 " >
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/brand/Global Realistic.png"
                        alt="logo"
                        className="w-1/2"
                      />
                    </div>
                    <div className="text-white text-center whitespace-pre-line tracking-wide mb-5 w-full pt-5">
                      <div className="text-4xl xl:text-5xl 2xl:text-6xl">
                        <p className="">
                          {t("Title1")}
                        </p>
                        <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                          {t("Title2")}
                        </p>
                      </div>
                      <p className="pt-6 mx-2 font-bold text-xl xl:text-2xl 2xl:text-3xl 2xl:pt-10">{t("para1")}</p>
                    </div>
                  </div>
                  <div className=" w-full lg:w-1/2 bg-[#0d0e2d] border-4 border-[#373856] rounded-[32px] pt-12 mx-auto my-5 md:flex-1 md:m-2 xl:mx-10 2xl:mx-20">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/brand/Dolar Icon.png"
                        alt="logo"
                        className="w-1/2"
                      />
                    </div>
                    <div className="text-white text-center whitespace-pre-line tracking-wide mb-5 w-full pt-5">
                      <div className="text-4xl xl:text-5xl 2xl:text-6xl">
                        <p className="">
                          {t("Title3")}
                        </p>
                        <p className="ml-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                          {t("Title4")}
                        </p>
                      </div>
                      <p className="pt-6 mx-2 font-bold text-xl xl:text-2xl 2xl:pt-10 2xl:text-3xl">{t("para2")}</p>
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
