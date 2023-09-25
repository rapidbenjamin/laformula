"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useInView, animated } from "react-spring";

const Hero = () => {
  
  const msg = useTranslations("hero");
  const navbar = useTranslations("header");

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -80,
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
        className="relative z-10 overflow-hidden pt-[180px] lg:pt-[140px] pb-16 bg-cover bg-no-repeat bg-center" style={{
          backgroundImage: "url('/images/texture/texture.png')", 
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 rounded-lg bg-cover bg-no-repeat" >
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <animated.div
                  ref={ref}
                  style={springs}
                  className="relative lg:space-x-24 items-center"
                >
                  <div className="xl:text-5xl lg:text-4xl font-bold leading-tight 2xs:text-xl 2xs:leading-snug 2xs:tracking-tight xs:text-2xl sm:text-3xl sm:tracking-wider sm:leading-tight md:text-4xl md:leading-tight text-[#e2e8f0] lg:mt-[100px]" style={{lineHeight:"1.3"}}>{msg("para1")}
                    <span className="xl:text-5xl lg:text-4xl font-bold leading-tight text-black dark:text-white 2xs:text-xl 2xs:leading-snug 2xs:tracking-tight xs:text-2xl sm:text-3xl sm:tracking-wider sm:leading-tight md:text-4xl md:leading-tight text-xl lg:text-5xl lg:font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text leading-10">
                    {msg("para2")}
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-[50px]">
                      <Image
                        src="/images/hero/Global.png"
                        alt="Global"
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        width={500}
                        height={300}
                      />
                  </div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
