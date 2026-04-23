"use client";
import Image from "next/image";
import Footer from "../footer";
import IndexNavbar from "@/navbar/IndexNavbar";
import IndexNavbar2 from "@/navbar/IndexNavbar2";

export default function Education() {
  return (
    <>
      <div className="xl:block lg:block hidden">
        <IndexNavbar />
      </div>
      <div className="xl:hidden lg:hidden block">
        <IndexNavbar2 />
      </div>

      <section>
        <div
          className="HS bg-bottom-transparent bg-no-repeat h-[600px]"
          style={{
            backgroundImage: "url(/images/banner/education.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <section className="xl:pt-56 md:pt-8 lg:pt-4 pt-40 xl:pb-32 md:pb-16 lg:pb-24 pb-12">
            <div>
              <h2 className="text-center text-white xl:text-6xl lg:text-4xl md:text-4xl text-3xl">
                Education
              </h2>
              <p className="text-center text-white xl:text-xl text-xl py-4 xl:w-6/12 lg:w-7/12 md:w-10/12 w-full mx-auto">
                Human resources consultancies help organizations to manage their human resources effectively.
                This includes providing advice on recruitment, training, performance management, and compensation.
              </p>
            </div>
          </section>
        </div>

        {/* UPDATED SECTION */}
        <section className="xl:block lg:block hidden">
          <div className="container mx-auto z-50">
            <div className="xl:mx-0 lg:mx-32">
              <div className="py-8 bgtrans rounded-2xl xl:-mt-44 lg:-mt-12">

                <div className="flex flex-wrap py-1 px-8 justify-center mx-auto">
                  {[
                    { country: "Vast Experience & Leaders in Overseas Education", image: "/images/education/vast1.png" },
                    { country: "Cooperative and Competent Consutlants", image: "/images/education/Consutlants.png" },
                    { country: "World Wide Admission Support", image: "/images/education/Admission1.png" },
                    { country: "Friendly & Approachable. Ensure Client Satisfaction", image: "/images/education/Client.png" },
                    { country: "Complete International Studies and Careers.", image: "/images/education/Career1.png" },
                  ].map((item, index) => (
                    <div key={index} className="xl:w-1/5 lg:w-1/5 p-2">
                      <div className="relative group px-4 py-8 mx-1 bg-white overflow-hidden rounded-lg border-2 border-transparent">

                        {/* Border Animation */}
                        <span className="absolute inset-0 pointer-events-none z-0">
                          <span className="absolute w-full h-1 bg-blue-800 top-0 left-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-linear"></span>
                          <span className="absolute h-full w-1 bg-blue-800 top-0 right-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-[1000ms] ease-linear delay-[150ms]"></span>
                          <span className="absolute w-full h-1 bg-blue-800 bottom-0 right-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-linear delay-[300ms]"></span>
                          <span className="absolute h-full w-1 bg-blue-800 bottom-0 left-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[1000ms] ease-linear delay-[450ms]"></span>
                        </span>

                        <div className="relative z-10 flex flex-col items-center">
                          
                          {/* ✅ Converted from <img> */}
                          <Image
                            src={item.image}
                            alt={item.country}
                            width={80}
                            height={80}
                            className="w-20 h-auto"
                          />

                          <h3 className="text-black text-base pt-6 text-center">
                            {item.country}
                          </h3>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

      </section>

      <Footer />
    </>
  );
}