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
      <section id="solution" className="relative z-10 pt-16 overflow-hidden pb-16"
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
                data-wow-delay=".3s"
              >
                <div className="w-full items-center">
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="text-base lg:text-3xl text-white mb-12 "
                  >
                    <div className="w-full text-center font-bold mb-10">
                      <p className="text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl ">
                        {t("Title1")}
                      </p>
                      <p className="text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                        {t("Title2")}
                      </p>
                    </div>
                    <p className="pt-4 text-justify break-all leading-loose mx-auto md:text-3xl xs:text-xl 2xs:text-lg lg:w-2/3">
                      {t("para")}
                    </p>
                  </animated.div>
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="flex flex-col md:flex-row items-center justify-center lg:mt-[150px] gap-6"
                  >
                    <div className="border-solid rounded-[40px] border-4 border-[#373856] bg-[#0d0e2d] p-10 w-3/4 md:w-[30%] xl:p-20">
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
                    </div>
                    <div className="border-solid rounded-[40px] border-4 border-[#373856] bg-[#0d0e2d] p-10 w-3/4 md:w-[30%] xl:p-20">
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
                    </div>
                    <div className="border-solid rounded-[40px] border-4 border-[#373856] bg-[#0d0e2d] p-10 w-3/4 md:w-[30%] xl:p-20">
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
                    </div>
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
