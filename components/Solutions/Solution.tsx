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
    <>
      <section id="home" className="relative z-10 pt-16 overflow-hidden pb-16"
        // style={{
        //   backgroundImage: "url('/images/texture/texture.png')",
        // }}
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
                <div className="w-full items-center">
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="text-base lg:text-3xl text-white mb-12 w-full"
                  >
                    <p className="text-2xl lg:text-7xl lg:font-bold ">
                      {t("Title1")}
                    </p>
                    <p className="text-2xl lg:text-7xl lg:font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                      {t("Title2")}
                    </p>
                    <p className=" pt-4 lg:w-1/2 text-center mx-auto">
                      {t("para")}
                    </p>
                  </animated.div>
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="flex items-center justify-evenly lg:mt-[150px] gap-6"
                  >
                    <span className="border-solid rounded-[40px] border-4 border-[#373856] p-20 lg:w-[30%] bg-[#0d0e2d]">
                      <Image
                        src="/images/brand/Formula Gears.svg"
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
                    <span className="border-solid rounded-[40px] border-4 border-[#373856] p-20 lg:w-[30%] bg-[#0d0e2d]">
                      <Image
                        src="/images/brand/Formula Idea.svg"
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
                    <span className="border-solid rounded-[40px] border-4 border-[#373856] p-20 lg:w-[30%] bg-[#0d0e2d]">
                      <Image
                        src="/images/brand/Formula Business.png"
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
                  </animated.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
