"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useInView, animated } from "react-spring";

const Hero = () => {
  const msg = useTranslations("hero");
  const navbar = useTranslations("header");

  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   // first prevent the default behavior
  //   e.preventDefault();
  //   // get the href and remove everything before the hash (#)
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, "");
  //   // get the element by id and use scrollIntoView
  //   const elem = document.getElementById(targetId);
  //   elem?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

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
        className="relative z-10 overflow-hidden pt-20 lg:pt-[140px] pb-16 bg-cover bg-no-repeat bg-center" style={{
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
                  <div className="text-xl lg:text-5xl lg:font-bold text-[#e2e8f0] lg:mt-[100px]" style={{lineHeight:"1.3"}}>{msg("para1")}
                    <span className="text-xl lg:text-5xl lg:font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text leading-10">
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
