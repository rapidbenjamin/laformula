"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useInView, animated } from "react-spring";

const AboutUs = () => {
  const msg = useTranslations("hero");
  const navbar = useTranslations("navbar");

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
        className="relative z-10 overflow-hidden pt-20 lg:pt-[40px] pb-16 bg-cover bg-no-repeat bg-center bg-[#0d0e2d]" 
        style={{
          backgroundImage: "", 
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
                  <div className="flex justify-center items-center">
                      <Image
                        src="/images/logo/logo.png"
                        alt="Global"
                        sizes="100vw"
                        style={{
                          width: '30%',
                          height: 'auto',
                        }}
                        width={500}
                        height={300}
                      />
                  </div>
                  <div className="flex items-start space-x-10 pt-10 font-light">
                      <Link
                        href="#footer"
                        className="w-1/3 mx-auto rounded-[64px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-4 text-center"
                      >
                        {navbar("contact")}
                      </Link>
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

export default AboutUs;
