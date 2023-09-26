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
                  <div className="text-2xl text-white mb-10 ">
                    <div className="w-full text-center font-bold my-5 tracking-wider xs:text-3xl xs:tracking-widest sm:text-4xl md:text-5xl xl:leading-[60px] 2xl:text-6xl">
                      <p className="">
                        {t("Title1")}
                      </p>
                      <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                        {t("Title2")}
                      </p>
                    </div>
                    <p className="text-justify break-all leading-loose mx-2 text-lg xs:text-xl xs:leading-[35px] sm:text-2xl sm:leading-[40px] md:text-3xl md:pt-5 lg:text-center lg:tracking-wider xl:text-4xl xl:leading-[50px] xl:tracking-wide 2xl:">
                      {t("para")}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center md:mt-[150px] gap-6">
                    <div className="border-solid rounded-[40px] border-4 border-[#373856] bg-[#0d0e2d] p-10 w-3/5 md:w-[30%] xl:p-20">
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
                    <div className="border-solid rounded-[40px] border-4 border-[#373856] bg-[#0d0e2d] p-10 w-3/5 md:w-[30%] xl:p-20">
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
                    <div className="border-solid rounded-[40px] border-4 border-[#373856] bg-[#0d0e2d] p-10 w-3/5 md:w-[30%] xl:p-20">
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
                  </div>
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
