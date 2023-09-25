"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useInView, animated } from "react-spring";
import Footer from "../Footer";

const AboutUs = () => {
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
        id="contact"
        className="relative z-10 overflow-hidden pb-[200px] lg:pt-[20px] bg-cover bg-no-repeat bg-center bg-[#0d0e2d]" 
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
                  className="relative items-center"
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
                  <div className="flex items-start font-light">
                      <Link
                        href="#footer"
                        className="w-1/3 mx-auto rounded-[64px] bg-gradient-to-r from-[#dc2d8a] to-[#4d4493] p-6 flex items-center justify-center text-white space-x-3 text-2xl"
                        style={{marginTop: '-40px'}}
                      >
                        <span className="inline-block">Costa Rica</span>
                        <Image
                          src="/images/brand/flag.png" 
                          alt="Flag" 
                          sizes="100vw"
                          style={{
                            width: '7%',
                            height: 'auto',
                          }}
                          width={500}
                          height={300}
                          />
                        <p>Centromerica</p>
                      </Link>
                    </div>
                    <div className="flex items-center justify-center space-x-[70px] mt-10">
                      <div className="flex items-center justify-center">
                        <Link 
                          href="https://web.telegram.org/k/#@laformulacapitalgroup" 
                          target="blank" 
                          className="w-10 h-10 rounded-full text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg flex items-center justify-center"
                          style={{ backgroundColor: "white" }}>
                          <svg
                            className="w-6 h-6 text-black fill-current"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{fillRule:"evenodd", clipRule:"evenodd", strokeLinejoin:"round", strokeMiterlimit:"1.41421"}}>
                            <path
                              id="telegram-1"
                              d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" 
                            />
                          </svg>
                        </Link>
                        <Link 
                          href="https://web.telegram.org/k/#@laformulacapitalgroup" 
                          target="blank" 
                          className="text-white text-2xl ml-3">
                          Telegram
                        </Link>
                      </div>
                      <div className="flex items-center justify-center">
                        <Link href="#" className="w-10 h-10 rounded-full text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: "white" }}>
                          <svg fill="#000000" height="70%" width="70%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 75.294 75.294">
                          <g>
                            <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
                              c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
                              H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
                              c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
                              c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
                              c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
                              c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
                          </g>
                        </svg>
                        </Link>
                        <Link href="#" className="text-white text-2xl ml-3">
                          Email
                        </Link>
                      </div>  
                    </div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
