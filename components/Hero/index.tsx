"use client";
import { useTranslations } from "next-intl";

const Hero = () => {
  
  const msg = useTranslations("hero");

  return (
      <section
        id="home"
        // 
        className="relative z-10 overflow-hidden pt-[250px] sm:pt-[200px] md:pt-[220px] lg:pt-[230px] bg-cover bg-no-repeat bg-center bg-[radial-gradient(10%_30%_at_0%_30%,#481131_0%,#0d0e2d_100%)]" 
        style={{backgroundImage: "url('/images/texture/texture.png')", }}
        >
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 bg-cover bg-no-repeat" >
            <div className="mx-auto text-center">
              <div className="relative text-center text-white tracking-wide whitespace-pre-line text-4xl ">
                <div className="mx-5 lg:text-5xl lg:leading-tight md:text-5xl 2xl:text-6xl 2xl:leading-normal">{msg("para1")}
                  <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                  {msg("para2")}
                  </span>
                </div>
                <div className="flex justify-center items-center mt-[12vh] sm:mt-[15vh] md:mt-[18vh] xl:mt-[5vh] 2xl:mt-0">
                    <img
                      src="/images/hero/Holographic Earth PNG.png"
                      alt="Global"
                      className="w-full h-[30vh] xs:h-[37vh] sm:h-[45vh] md:w-3/4 lg:h-[50vh] 2xl:w-3/5 2xl:h-[55vh]"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
