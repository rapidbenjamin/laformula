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
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden lg:pt-[200px] pt-[100px] lg:pb-16"
        // style={{
        //     backgroundImage: "url('/images/texture/texture.png')",
        //   }}
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
                <div className="w-full lg:flex items-center lg:px-24 lg:space-x-8">
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="relative w-full lg:h-[70vh] lg:w-1/2 bg-[#0d0e2d] border-4 border-[#373856] rounded-[32px] pt-12 mb-24"
                  >
                    <span className="flex items-center justify-center">
                      <Image
                        src="/images/brand/Global Realistic.png"
                        alt="logo"
                        sizes="100vw"
                        style={{
                          width: '50%',
                          height: 'auto',
                        }}
                        width={500}
                        height={500}
                      />
                    </span>
                    <div className="text-base lg:text-3xl text-white mb-12 w-full">
                      <p className="text-xl font-light lg:text-6xl lg:font-semibold">
                        {t("Title1")}
                      </p>
                      <p className="text-xl font-light lg:text-6xl lg:font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                        {t("Title2")}
                      </p>
                      <p className=" pt-6 text-center mx-auto">{t("para1")}</p>
                    </div>
                  </animated.div>
                  <animated.div
                    ref={ref1}
                    style={springs1}
                    className="relative w-full lg:h-[70vh] lg:w-1/2 bg-[#0d0e2d] border-4 border-[#373856] rounded-[32px] pt-12 mb-24"
                  >
                    <span className="flex items-center justify-center">
                      <Image
                        src="/images/brand/Dolar Icon.png"
                        alt="logo"
                        sizes="100vw"
                        style={{
                          width: '50%',
                          height: 'auto',
                        }}
                        width={500}
                        height={500}
                      />
                    </span>
                    <div className="text-base lg:text-3xl text-white mb-12 w-full">
                      <p className="text-xl font-light lg:text-6xl lg:font-semibold">
                        {t("Title3")}
                      </p>
                      <p className="text-xl font-light lg:text-6xl lg:font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                        {t("Title4")}
                      </p>
                      <p className=" pt-6 text-center mx-6">{t("para2")}</p>
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

export default Management;
